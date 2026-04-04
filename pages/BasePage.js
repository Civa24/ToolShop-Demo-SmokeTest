export class BasePage{
    constructor(page){
        this.page=page;
    }
  open =  async (url)=>{
        await this.page.goto(url);
    }
}