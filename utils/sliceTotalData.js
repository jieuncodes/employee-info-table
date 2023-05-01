export function sliceTotalData(data, currentPage, showingContentsNum) {
  console.log('curr', currentPage);
    const startIndex = (currentPage - 1) * showingContentsNum;
    const endIndex = startIndex + showingContentsNum;
    console.log('sliced',  data.slice(startIndex, endIndex));
    return data.slice(startIndex, endIndex);
  }