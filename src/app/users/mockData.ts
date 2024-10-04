export type User = {
    id: string;
    name: string;
    email: string;
    bio: string;
    role: string;
  };
  
  export const users: User[] = [
    {
      id: '1',
      name: 'Anand K.',
      email: 'anand@example.com',
      bio: 'Software developer and creator of Sabka Munch. Passionate about web development and blockchain.',
      role: 'Admin',
    },
    {
      id: '2',
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Full-stack developer with expertise in modern web technologies.',
      role: 'Editor',
    },
    {
      id: '3',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      bio: 'Technical writer and content creator. Loves sharing knowledge about JavaScript and React.',
      role: 'Author',
    },
    {
      id: '4',
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      bio: 'Backend engineer specializing in Node.js and database management.',
      role: 'User',
    },
    {
      id: '5',
      name: 'Sophia Lee',
      email: 'sophia.lee@example.com',
      bio: 'Frontend developer focusing on creating beautiful, accessible user interfaces.',
      role: 'User',
    },
    {
      id: '6',
      name: 'Chris Wilson',
      email: 'chris.wilson@example.com',
      bio: 'DevOps engineer experienced in CI/CD pipelines and cloud infrastructure.',
      role: 'User',
    },
  ];
  