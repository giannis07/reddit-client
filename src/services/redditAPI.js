export const fetchPosts = async (subreddit, searchQuery) => {
    const url = searchQuery
      ? `https://www.reddit.com/r/${subreddit}/search.json?q=${searchQuery}`
      : `https://www.reddit.com/r/${subreddit}.json`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
      }
      const data = await response.json();
      return data.data.children.map((child) => child.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      return []; // Επιστρέφει κενό array σε περίπτωση σφάλματος
    }
  };
  
  export const fetchComments = async (postId) => {
    const url = `https://www.reddit.com/comments/${postId}.json`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch comments: ${response.statusText}`);
      }
      const data = await response.json();
      return data[1].data.children.map((child) => child.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
      return []; // Επιστρέφει κενό array σε περίπτωση σφάλματος
    }
  };
  