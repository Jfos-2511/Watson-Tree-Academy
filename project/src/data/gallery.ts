interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  before?: string;
  after?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'tree-removal-1',
    title: 'Large Oak Removal',
    category: 'tree-removal',
    image: '/assets/Tree-Over-Roof.webp',
    before: '/assets/Tree-Over-Roof.webp',
    after: '/assets/Watson-Tree-Stump.webp'
  },
  {
    id: 'emergency-1',
    title: 'Storm Damage Response',
    category: 'emergency',
    image: '/assets/EmergencyTree1.webp',
    before: '/assets/EmergencyTree1.webp',
    after: '/assets/EmergencyTree2.webp'
  },
  {
    id: 'tree-trimming-1',
    title: 'Professional Tree Trimming',
    category: 'tree-trimming',
    image: '/assets/Trimming1.webp'
  },
  {
    id: 'deadwooding-1',
    title: 'Dead Branch Removal',
    category: 'tree-trimming',
    image: '/assets/DeadWoodingTree.webp',
    before: '/assets/DeadWoodingTree.webp',
    after: '/assets/Deadwooding3.webp'
  },
  {
    id: 'stump-removal-1',
    title: 'Complete Stump Grinding',
    category: 'stump-removal',
    image: '/assets/StumpGrinding1.webp'
  },
  {
    id: 'chainsaw-work-1',
    title: 'Precision Cutting',
    category: 'tree-removal',
    image: '/assets/ChainsawCut.webp'
  }
];