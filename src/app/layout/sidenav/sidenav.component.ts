import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
    isLeftSidebarCollapsed = input.required<boolean>();
    changeIsLeftSidebarCollapsed = output<boolean>();
    items = [
      {
          routeLink: 'dashboard',
          icon: 'fal fa-home',
          label: 'Dashboard',
      },
      {
          routeLink: 'financeiro',
          icon: 'fal fa-box-open',
          label: 'Financeiro',
      },
      {
          routeLink: 'financeiro/boletos',
          icon: 'fal fa-file',
          label: 'Boletos',
      },
      {
          routeLink: 'settings',
          icon: 'fal fa-cog',
          label: 'Settings',
      },
    ];

    toggleCollapse(): void {
      this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
    }

    closeSidenav(): void {
        this.changeIsLeftSidebarCollapsed.emit(true);
    }
}
