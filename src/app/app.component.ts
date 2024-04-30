import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  template: '<h1>Todo list</h1>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  componentTitle = "To Do List";

  //filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false
    });
  }

  get items() {
    if (this.filter === "all" ) {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : item.done
    );
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  filter: "all" | "active" | "done" = "all";
}
