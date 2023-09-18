export type ScrollHistoryPage = {
  position: number,
  page: string,
}

export interface ScrollHistoryState {
  pages: { [key: string]:  ScrollHistoryPage }
}