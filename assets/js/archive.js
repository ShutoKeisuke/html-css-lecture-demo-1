document.addEventListener('DOMContentLoaded', () => {
  const archive = new Archive();
});

class Archive {
  ArchiveYearItemList

  constructor() {
    this.ArchiveYearItemList = document.querySelectorAll('.archive-year-container-item');
    this.addClickEventArchiveYearItemList();
  }

  addClickEventArchiveYearItemList() {
    if (this.ArchiveYearItemList.length < 1) return;

    this.ArchiveYearItemList.forEach(dom => {
      dom.addEventListener('click', () => {
        dom.classList.toggle('open');
      })
    })
  }
}