import express, { Application, Request, Response } from "express";

class App {
  //Atributos
  public app: any;
  private server: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
  }

  routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello World");
    });
  }

  public start(): void {
    this.server = this.app.listen(3000, () => {
      console.log("Server on port 3000");
    });
  }

  public close(): void {
    this.server.close();
  }
}

export default App;
