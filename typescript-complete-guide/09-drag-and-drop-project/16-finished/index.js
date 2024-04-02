const fs = require('fs');
const path = require('path');

function processFoldersInDirectory(directoryPath) {
  // 해당 디렉토리 내의 파일 및 폴더 목록을 읽어옴
  fs.readdir(directoryPath, (err, items) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // 각 아이템에 대해 반복
    items.forEach(item => {
      const itemPath = path.join(directoryPath, item);

      // 해당 아이템이 폴더인지 확인
      fs.stat(itemPath, (err, stats) => {
        if (err) {
          console.error('Error getting stats for item:', err);
          return;
        }

        if (stats.isDirectory()) {
          // 폴더 내부의 중첩 폴더까지 들어가는 것을 방지하기 위해, 중첩 폴더가 없는 폴더일 때만 처리
          const nestedFolders = fs
            .readdirSync(itemPath)
            .filter(innerItem =>
              fs.statSync(path.join(itemPath, innerItem)).isDirectory()
            );
          if (nestedFolders.length === 1) {
            // 중첩 폴더가 하나뿐이라면 중첩 폴더 안에 있는 파일들을 해당 폴더로 옮기기
            const nestedFolderPath = path.join(itemPath, nestedFolders[0]);
            fs.readdir(nestedFolderPath, (err, nestedItems) => {
              if (err) {
                console.error('Error reading nested directory:', err);
                return;
              }

              // 중첩 폴더 내부의 파일들을 이동시킴
              nestedItems.forEach(nestedItem => {
                const nestedItemPath = path.join(nestedFolderPath, nestedItem);
                const destinationPath = path.join(
                  directoryPath,
                  item,
                  nestedItem
                );
                fs.rename(nestedItemPath, destinationPath, err => {
                  if (err) {
                    console.error('Error moving file:', err);
                    return;
                  }
                  console.log(
                    `${nestedItem} 파일을 ${destinationPath}로 이동했습니다.`
                  );
                });
              });

              // 중첩 폴더 삭제
              fs.rmdir(nestedFolderPath, err => {
                if (err) {
                  console.error('Error removing nested folder:', err);
                  return;
                }
                console.log(`${nestedFolderPath} 폴더를 삭제했습니다.`);
              });
            });
          }
        }
      });
    });
  });
}

// 함수 호출 예시
const directoryPath =
  'd:/babyWAVY/@repository/TS-the-typeinator/typescript-complete-guide/09-drag-and-drop-project';
processFoldersInDirectory(directoryPath);
