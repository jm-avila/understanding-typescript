const person: { name: string; age: number } = {
  name: "Ed",
  age: 99
};

const nestedObject: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = { id: "", price: 0, tags: [""], details: { title: "", description: "" } };
