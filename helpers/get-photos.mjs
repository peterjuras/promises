export function getPhotos(numberOfTasks, options) {
  const tasks = [];
  for (let i = 0; i < numberOfTasks; i++) {
    if (options?.withErrors && i % 20 === 0) {
      tasks.push(undefined);
    } else {
      tasks.push({
        value: i + 1,
        delay: options?.includeVideos && i % 15 === 0 ? 10000 : 1000,
      });
    }
  }
  return tasks;
}
