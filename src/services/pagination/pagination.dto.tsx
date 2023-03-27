export class Pagination {
    public constructor(
        public page?: number,
        public per_page?: number,
        public total?: number,
        public total_pages?: number,
        public refresh?:(page:number)=> void
    ) {
    }
}