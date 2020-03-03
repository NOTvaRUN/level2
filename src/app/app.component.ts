import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "test1";

  output;

  calci(n, f) {
    let x = parseInt(n.value);
    let y = parseInt(f.value);

    let product = x * y;
    this.output = product.toString();
  }
}
