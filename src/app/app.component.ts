import { Component, HostListener, signal, OnInit } from '@angular/core';
import { MainComponent } from './layout/main/main.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
