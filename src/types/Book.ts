export interface BookDetails {
 title: string
 author: string
 isbn: string
 publisher: string
 published_date: string
 summary: string
 cover_image_url: string
 favorite: boolean
 read: boolean
}

export class Book implements BookDetails {
  constructor(
    public title: string,
    public author: string,
    public isbn: string,
    public publisher: string,
    public published_date: string,
    public summary: string,
    public cover_image_url: string,
    public favorite: boolean = false,
    public read: boolean = false
  ) {}
}
