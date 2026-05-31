export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  author: string;
  readTime: string;
  date: string;
  excerpt: string;
  cover: string;
  content: string[];
}

import cover1 from "@/assets/project-3.jpg";
import cover2 from "@/assets/project-5.jpg";
import cover3 from "@/assets/studio.jpg";
import cover4 from "@/assets/project-1.jpg";

export const blogPosts: BlogPost[] = [
  {
    slug: "on-patina",
    title: "On patina, and the architecture of waiting",
    category: "Essays",
    tags: ["materials", "brass", "oak"],
    author: "Eleni Vakirtzi",
    readTime: "6 min",
    date: "March 12, 2026",
    excerpt:
      "A short defence of brass that tarnishes, oak that darkens, and lime plaster that takes ten years to settle into a room.",
    cover: cover1,
    content: [
      "The first time a client asks us about brass, they almost always ask the same question: will it stay this colour?",
      "The honest answer is no. It will not. And that, we have come to believe, is the most important thing it will do.",
      "A building that refuses to age is a building that refuses to be lived in. The patina of a handrail, the soft darkening of an oak threshold, the bloom on a lime-washed wall — these are not flaws. They are the record of inhabitation.",
      "We design with this record in mind. We choose materials not for how they look on the day of handover, but for how they will look in twenty years, after a thousand mornings of light and a thousand evenings of touch.",
    ],
  },
  {
    slug: "alpine-notebook",
    title: "Notebook from an alpine site",
    category: "Site Notes",
    tags: ["site", "process"],
    author: "Søren Aalborg",
    readTime: "4 min",
    date: "February 2, 2026",
    excerpt:
      "Fragments from three days spent at 1,800m, watching how snow moves through a valley before a single line was drawn.",
    cover: cover2,
    content: [
      "Day one. Arrived late. The sun was already behind the ridge, the meadow already in shadow. We did not draw.",
      "Day two. Wind from the north-west all morning, swinging south by three. The site is in a saddle. Any building here will have to learn this rhythm.",
      "Day three. Walked the property line three times. The neighbour, a farmer of forty years, told us where the spring runs in April. That single sentence will redraw the plan.",
    ],
  },
  {
    slug: "lime-plaster",
    title: "Lime plaster, and why we still mix it on site",
    category: "Materials",
    tags: ["lime", "craft", "interiors"],
    author: "Mira Tanaka",
    readTime: "5 min",
    date: "January 14, 2026",
    excerpt:
      "A practical note on hydrated lime, regional sand, and the small craft economy that depends on us specifying it.",
    cover: cover3,
    content: [
      "Lime plaster is older than cement by several thousand years and, in nearly every respect that matters to us, still better.",
      "It breathes. It absorbs and releases moisture in step with the room. It develops a soft, mineral surface that catches light differently in every hour.",
      "We mix it on site, with sand from within fifty kilometres of the project, and a master plasterer who has been doing this for thirty years. The result cannot be ordered from a catalogue, and that is exactly the point.",
    ],
  },
  {
    slug: "kyoto-walks",
    title: "Five walks in Kyoto",
    category: "Travel",
    tags: ["kyoto", "thresholds", "travel"],
    author: "Lars Møller",
    readTime: "7 min",
    date: "November 20, 2025",
    excerpt:
      "What two of us learned in a week of looking at thresholds, gardens, and the precise depth of a temple eave.",
    cover: cover4,
    content: [
      "We did not go to Kyoto to study temples. We went to study thresholds — the few centimetres of shadow where outside becomes inside.",
      "In every building we visited, the threshold was longer, deeper, and quieter than we expected. It was never a line. It was always a small room of its own.",
      "We brought this idea home. The next three projects on our boards have all gained a threshold.",
    ],
  },
];
