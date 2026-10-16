import { Component, computed, signal } from '@angular/core';

type ProjectCategory = 'Todos' | 'Landing pages' | 'Sites' | 'Sistemas';

interface Project {
  category: Exclude<ProjectCategory, 'Todos'>;
  title: string;
  description: string;
  eyebrow: string;
  theme: 'amber' | 'violet' | 'blue';
}

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly menuOpen = signal(false);
  protected readonly activeCategory = signal<ProjectCategory>('Todos');
  protected readonly categories: ProjectCategory[] = ['Todos', 'Landing pages', 'Sites', 'Sistemas'];

  protected readonly projects: Project[] = [
    {
      category: 'Landing pages',
      title: 'Barbearia Central',
      description: 'Agendamento rápido e serviços apresentados sem enrolação.',
      eyebrow: 'Beleza & cuidado',
      theme: 'amber',
    },
    {
      category: 'Sites',
      title: 'Clínica Sorriso',
      description: 'Confiança, localização e atendimento em poucos cliques.',
      eyebrow: 'Saúde & bem-estar',
      theme: 'violet',
    },
    {
      category: 'Sistemas',
      title: 'Agenda Fácil',
      description: 'Um painel simples para organizar horários e clientes.',
      eyebrow: 'Gestão & rotina',
      theme: 'blue',
    },
  ];

  protected readonly filteredProjects = computed(() => {
    const category = this.activeCategory();
    return category === 'Todos'
      ? this.projects
      : this.projects.filter((project) => project.category === category);
  });

  protected selectCategory(category: ProjectCategory): void {
    this.activeCategory.set(category);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
