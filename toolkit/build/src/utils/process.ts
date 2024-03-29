import { PROJECT_ROOT_PATH } from '@naive-ui-pro/build-utils';
import chalk from 'chalk';
import { spawn } from 'child_process';
import consola from 'consola';

export const run = async (command: string, cwd: string = PROJECT_ROOT_PATH) =>
  new Promise<void>((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');

    consola.info(`run: ${chalk.blue(`${cmd} ${args.join(' ')}`)}`);
    const app = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });

    const onProcessExit = () => app.kill('SIGHUP');

    app.on('close', (code) => {
      process.removeListener('exit', onProcessExit);

      if (code === 0) resolve();
      else {
        reject(
          new Error(`Command failed. \n Command: ${command} \n Code: ${code}`)
        );
      }
    });

    process.on('exit', onProcessExit);
  });
