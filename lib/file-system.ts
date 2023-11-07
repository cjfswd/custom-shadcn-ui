import fs from 'fs';
import path from 'path';

export function getFiles(dir: string, files: string[] = []) {
  // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir);
  // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of fileList) {
    const name = path.resolve(dir, file);
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, files);
    } else {
      // If it is a file, push the full path to the files array
      files.push(name);
    }
  }
  return files;
}

export function getLastModifiedDateSync(filePath: string): Date | null {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (err) {
    console.log(err);
    return null;
  }
}