async function defaultTask(cb) {
  // place code for your default task here
  return new Promise((resolve ) => {
    setTimeout(() => {
      resolve('done');
      console.log('任务执行完成')
      cb();
    }, 3000);
  })
}

export default defaultTask;
