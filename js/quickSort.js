// 連想配列(hash)向けのクイックソート
function quickSortArrayIncludedHash(start, end, array) {
    if (end - start < 2) {
      // 1. 走査する配列長が0か１の場合戻る。
      return;
    }
  
    console.log(start, end);
    // 2. 走査する範囲の中央の要素をピボットとして選ぶ。
    let pivot = Math.floor((start + end) / 2);
    let pivot_height = array[pivot]["id"];
    console.log(pivot_height); //debug
    // 走査範囲の左と右端を渡す
    let left = start;
    let right = end;
  
  
    while (left < right) {
      // 3. ピボットと比べ、大きい要素は左へ小さい要素は右へ交換する。
      while (array[left]["id"] < pivot_height) left++; // 左側の基準値より大きい位置まで移動
      while (array[right]["id"] > pivot_height) right--; // 右側の基準値より小さい位置まで移動
  
      if (left < right) {
        // 交換を記録する
        // record(left, right, start, end, pivot_height, array);
        // leftがrightを超えていない場合、leftとrightを交換
        swap(left, right, array);
      } else {
        //leftがrightを超えたら走査範囲の比較を止める
        break;
      }
    }
  
    // 4. 左右２つに配列を分割してこの関数を再帰的に繰り返す。
    quickSortArrayIncludedHash(start, left - 1, array);
    quickSortArrayIncludedHash(right, end, array);
  
    return true;
  }
  
  
  // 配列の要素を交換する
  function swap(left, right, array) {
    let tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;
  }



// シンプルなクイックソート
function quickSort(start, end, array) {
    if (end - start < 2) {
      // 1. 走査する配列長が0か１の場合戻る。
      return;
    }
  
    console.log(start, end);
    // 2. 走査する範囲の中央の要素をピボットとして選ぶ。
    let pivot = Math.floor((start + end) / 2);
    let pivot_height = array[pivot];
    // 走査範囲の左と右端を渡す
    let left = start;
    let right = end;
  
  
    while (left < right) {
      // 3. ピボットと比べ、大きい要素は左へ小さい要素は右へ交換する。
      while (array[left] < pivot_height) left++; // 左側の基準値より大きい位置まで移動
      while (array[right] > pivot_height) right--; // 右側の基準値より小さい位置まで移動
  
      if (left < right) {
        // 交換を記録する
        // record(left, right, start, end, pivot_height, array);
        // leftがrightを超えていない場合、leftとrightを交換
        swap(left, right, array);
      } else {
        //leftがrightを超えたら走査範囲の比較を止める
        break;
      }
    }
  
    // 4. 左右２つに配列を分割してこの関数を再帰的に繰り返す。
    quickSort(start, left - 1, array);
    quickSort(right, end, array);
  
    return true;
  }
  
  
  // 配列の要素を交換する
  function swap(left, right, array) {
    let tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;
  }