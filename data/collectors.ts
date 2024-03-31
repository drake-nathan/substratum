interface OwnedItem {
  editionsOwned: number[];
  title: string;
}

interface CollectorData {
  name: string;
  owned: OwnedItem[];
}

const collectorData: CollectorData[] = [
  {
    name: "collector.eth",
    owned: [
      {
        editionsOwned: [11, 24, 81],
        title: "Project1",
      },
      {
        editionsOwned: [24, 13],
        title: "Project2",
      },
      {
        editionsOwned: [108],
        title: "Project3",
      },
    ],
  },
  {
    name: "collector2.eth",
    owned: [
      {
        editionsOwned: [1, 2, 3],
        title: "Project1",
      },
      {
        editionsOwned: [12, 17],
        title: "Project2",
      },
    ],
  },
];

export default collectorData;
