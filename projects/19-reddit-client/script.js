const STORAGE_KEY = 'subreddits';

function renderPosts(postsEl, posts = []) {
  posts.forEach(({ title, author, votesCount, permalink }) => {
    const postEl = createElement('li', ['post']);
    const postVotesCountEl = createElement(
      'span',
      ['post__votes-count'],
      [],
      `👍 ${votesCount}`
    );
    const authorEl = createElement(
      'span',
      ['post__author'],
      [],
      `👤 ${author}`
    );
    const linkEl = createElement(
      'a',
      ['post__link'],
      [
        { name: 'href', value: `https://reddit.com${permalink}` },
        { name: 'target', value: '_blank' },
      ],
      `✨ ${title}`
    );
    postEl.append(postVotesCountEl, authorEl, linkEl);
    postsEl.append(postEl);
  });
}

function renderSubreddit(subredditName, posts = []) {
  if (!posts.length) return;

  const subredditsEl = document.querySelector('.subreddits');
  const subredditEl = createElement('div', ['subreddit']);
  const headerEl = createElement('div', ['subreddit__header']);
  const addressEl = createElement('p', ['subreddit__address']);
  const actionsEl = createElement('div', ['subreddit__actions']);
  const refreshBtn = createElement('button', ['subreddit__btn']);
  const deleteBtn = createElement('button', ['subreddit__btn']);
  const postsEl = createElement('ul', ['posts']);

  addressEl.textContent = `/r/${subredditName}`;
  refreshBtn.textContent = '🔄';
  deleteBtn.textContent = '❌';

  refreshBtn.addEventListener('click', () => {
    fetchPosts(subredditName).then((posts) => {
      postsEl.innerHTML = '';
      renderPosts(postsEl, posts);
    });
  });

  deleteBtn.addEventListener('click', () => {
    const savedSubreddits = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const updatedSubreddits = savedSubreddits.filter(
      (sub) => sub.name !== subredditName
    );
    savePostsToStorage(updatedSubreddits);
    subredditEl.remove();
  });

  actionsEl.append(refreshBtn, deleteBtn);
  headerEl.append(addressEl, actionsEl);
  renderPosts(postsEl, posts);
  subredditEl.append(headerEl, postsEl);
  subredditsEl.append(subredditEl);
}

function createElement(
  tagName,
  classes = [],
  attributes = [],
  textContent = ''
) {
  const el = document.createElement(tagName);
  if (classes.length) el.classList.add(...classes.filter(Boolean));
  attributes.forEach(({ name, value }) => {
    if (value) el.setAttribute(name, value);
  });
  if (textContent) el.textContent = textContent;
  return el;
}

function showError(message) {
  const dialog = createElement('dialog', ['error']);
  const p = createElement('p', ['error__message']);
  const btn = createElement('button', ['error__close-btn']);

  p.textContent = message;
  btn.addEventListener('click', () => {
    dialog.close();
    dialog.remove();
  });
  btn.textContent = 'Close';

  dialog.append(p, btn);
  document.body.append(dialog);
  dialog.showModal();
}

async function fetchPosts(subredditName) {
  try {
    toggleLoading(true);
    const url = `https://corsproxy.io/?url=https://www.reddit.com/r/${subredditName}.json`;
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch posts');
    }
    const data = await response.json();
    if (!data.data.dist) {
      throw new Error('The subreddit is empty or does not exist');
    }
    const posts = data.data.children.map((child) => ({
      title: child.data.title,
      author: child.data.author,
      votesCount: child.data.ups,
      permalink: child.data.permalink,
    }));
    return posts;
  } catch (error) {
    showError(error.message);
    console.error(error);
  } finally {
    toggleLoading(false);
  }
}

function savePostsToStorage(newPosts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts) || '[]');
}

function openModal() {
  document.querySelector('.modal').showModal();
}

function closeModal() {
  const modalEl = document.querySelector('.modal');
  const modalFormEl = document.querySelector('.modal__form');
  modalEl.close('cancel');
  modalFormEl.reset();
}

function toggleLoading(isLoading) {
  const loadingEl = document.querySelector('.loading');
  if (isLoading) {
    loadingEl.classList.add('active');
  } else {
    loadingEl.classList.remove('active');
  }
}

function renderFromStorage() {
  const savedSubreddits = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  for (const subreddit of savedSubreddits) {
    renderSubreddit(subreddit.name, subreddit.posts);
  }
}

function init() {
  const addBtn = document.querySelector('.add-btn');
  const modalFormEl = document.querySelector('.modal__form');
  const cancelBtn = document.querySelector('.modal__btn--cancel');

  addBtn.addEventListener('click', openModal);
  modalFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(modalFormEl);
    const subredditName = formData.get('subreddit-name');

    if (subredditName) {
      fetchPosts(subredditName).then((posts) => {
        renderSubreddit(subredditName, posts);
        const savedSubreddits =
          JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        savePostsToStorage([
          ...savedSubreddits,
          { name: subredditName, posts },
        ]);
      });
    }

    closeModal();
  });

  cancelBtn.addEventListener('click', closeModal);
  renderFromStorage();
}

init();
