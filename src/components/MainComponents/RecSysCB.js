const ContentBasedRecommender = require('content-based-recommender');

const posts = [
  {
    id: '1000001',
    content: 'Why studying javascript is fun?',
  },
  {
    id: '1000002',
    content: 'The trend for javascript in machine learning',
  },
  {
    id: '1000003',
    content: 'The most insightful stories about JavaScript',
  },
  {
    id: '1000004',
    content: 'Introduction to Machine Learning',
  },
  {
    id: '1000005',
    content: 'Machine learning and its application',
  },
  {
    id: '1000006',
    content: 'Python vs Javascript, which is better?',
  },
  {
    id: '1000007',
    content: 'How Python saved my life?',
  },
  {
    id: '1000008',
    content: 'The future of Bitcoin technology',
  },
  {
    id: '1000009',
    content: 'Is it possible to use javascript for machine learning?',
  },
];

const tags = [
 {
   id: '1',
   content: 'Javascript',
 },
 {
   id: '2',
   content: 'machine learning',
 },
 {
   id: '3',
   content: 'application',
 },
 {
   id: '4',
   content: 'introduction',
 },
 {
   id: '5',
   content: 'future',
 },
 {
   id: '6',
   content: 'Python',
 },
 {
   id: '7',
   content: 'Bitcoin',
 },
];


const tagMap = tags.reduce((acc, tag) => {
acc[tag.id] = tag;
return acc;
}, {});
//console.log(tagMap)


const recommender = new ContentBasedRecommender();

recommender.trainBidirectional(posts, tags);


for (let post of posts) {
const relatedTags = recommender.getSimilarDocuments(post.id);
const tags = relatedTags.map(t => tagMap[t.id].content);
//console.log(post.content, 'related tags:', tags);
}



const allTrainingData = [
  {
    id: 3,
    content: "The Great Gatsby, third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribners Sons. Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
  },
  {
    id: 13,
    content: "Silence, inspired by real-world events and people. This novel had such a global impact that it was adapted into a celebrated film by Martin Scorsese. The novel features the famous Shimabara Rebellion, in which a group of Catholic peasants, in 1637, rose up against their lord after he laid down brutal anti-Christian laws in his region.",
  },
  {
    id: 8,
    content: "The novel chronicles the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families. ... Tolstoy also said that the best Russian literature does not conform to standards and hence hesitated to call War and Peace a novel.",

  },
  {
    id: 9,
    content: "Hamlet Summary. The ghost of the King of Denmark tells his son Hamlet to avenge his murder by killing the new king, Hamlets uncle. Hamlet feigns madness, contemplates life and death, and seeks revenge. His uncle, fearing for his life, also devises plots to kill Hamlet.",
  },
  {
    id: 12,
    content: "Murasaki Shikibu. At its most basic, The Tale of Genji is an absorbing introduction to the culture of the aristocracy in early Heian Japan—its forms of entertainment, its manner of dress, its daily life, and its moral code.",
  },
  {
    id: 15,
    content: "The book is set in 1984 in Oceania, one of three perpetually warring totalitarian states (the other two are Eurasia and Eastasia). Oceania is governed by the all-controlling Party, which has brainwashed the population into unthinking obedience to its leader, Big Brother.",
  },
  {
    id: 10,
    content: "Crime and Punishment focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates a plan to kill an unscrupulous pawnbroker for her money.",
  },
  {
    id: 14,
    content: "Suffused with Munros clarity of vision and her unparalleled gift for storytelling, these tales about departures and beginnings, accidents and dangers, and outgoings and homecomings both imagined and real, paint a radiant, indelible portrait of how strange, perilous, and extraordinary ordinary life can be.",
  },
  {
    id: 1,
    content: "A beautiful, aristocratic married woman from St. Petersburg whose pursuit of love and emotional honesty makes her an outcast from society. Annas adulterous affair catapults her into social exile, misery, and finally suicide.",
  },
  {
    id: 5,
    content: "A Passage to India concerns the relations between the English and the native population of India during the colonial period in which Britain ruled India. The novel takes place primarily in Chandrapore, a city along the Ganges River notable only for the nearby Marabar caves.",
  },
  {
    id: 6,
    content: "The narrator of Invisible Man is a nameless young black man who moves in a 20th-century United States where reality is surreal and who can survive only through pretense. Because the people he encounters see only my surroundings, themselves, or figments of their imagination, he is effectively invisible.",
  },
  {
    id: 2,
    content: "To Kill a Mockingbird by Harper Lee centres on Atticus Finch attempts to prove the innocence of Tom Robinson, a black man who has been wrongly accused of raping a white woman in 1930s Alabama.",
  },
  {
    id: 7,
    content: "The plot revolves around the adventures of a noble (hidalgo) from La Mancha named Alonso Quixano, who reads so many chivalric romances that he loses his mind and decides to become a knight-errant (caballero andante) to revive chivalry and serve his nation, under the name Don Quixote de la Mancha.",
  },
  {
    id: 11,
    content: "Catch-22, satirical novel by American writer Joseph Heller, published in 1961. The work centres on Captain John Yossarian, an American bombardier stationed on a Mediterranean island during World War II, and chronicles his desperate attempts to stay alive.",

  },
  {
    id: 4,
    content: "This is the authors epic tale of seven generations of the Buendia family that also spans a hundred years of turbulent Latin American history, from the postcolonial 1820s to the 1920s. Patriarch Jose Arcadio Buendia builds the utopian city of Macondo in the middle of a swamp.",
  },
]

const userTrainData = [
  {
    id: 1,
    content: "A beautiful, aristocratic married woman from St. Petersburg whose pursuit of love and emotional honesty makes her an outcast from society. Annas adulterous affair catapults her into social exile, misery, and finally suicide.",
  },
  {
    id: 2,
    content: "To Kill a Mockingbird by Harper Lee centres on Atticus Finch attempts to prove the innocence of Tom Robinson, a black man who has been wrongly accused of raping a white woman in 1930s Alabama.",
  },
  {
    id: 3,
    content: "The Great Gatsby, third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribners Sons. Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
  },
]

const tagMapI = userTrainData.reduce((acc, tag) => {
  acc[tag.id] = tag;
  return acc;
  }, {});



const booksRecommender = new ContentBasedRecommender();

booksRecommender.trainBidirectional(allTrainingData, userTrainData);


for (let post of allTrainingData) {
  const relatedTags = booksRecommender.getSimilarDocuments(post.id);
  const tags = relatedTags.map(t => { return tagMapI[t.id] ? tagMapI[t.id].content : ''});
  console.log(post.content, 'related tags:', tags);
  }