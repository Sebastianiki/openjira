
interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData:SeedData = {
  entries : [
    {
      description: 'Pendiente: Dolor irure labore non ut.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'En progreso: Aliqua voluptate reprehenderit elit qui adipisicing.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      description: 'Completada: Exercitation exercitation amet Lorem velit et labore aliqua anim Lorem cupidatat qui in enim.',
      status: 'finished',
      createdAt: Date.now() - 100000
    },
  ]
}