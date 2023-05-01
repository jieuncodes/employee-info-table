export function sliceTotalData(data, currentPage, showingContentsNum) {
    const startIndex = (currentPage - 1) * showingContentsNum;
    const endIndex = startIndex + showingContentsNum;
    return data.slice(startIndex, endIndex);
  }