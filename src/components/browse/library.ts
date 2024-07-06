/*
- ExtraOrdinary:: V.E. Schwab, Enid Balam  
- Another Kind:: Trevor Bream
- The High 5 Habit: Take...:: Mel Robbins
- The Perfect Day to...:: Rick Ross
- Sapiens: A Graphic...:: David Vandermeulen, ...
- Peak Mind: Find Your...:: Amishi P. Jha
*/
interface BookDetails {
 title: string
 author: string
 isbn: string
 publisher: string
 publisher_date: string
 summary: string
}

const myLibrary: BookDetails = [
  {
    title: 'ExtraOrdinary, (Villains #1.5)',
    author: 'V.E. Schwab, Enid Balam',
    isbn: '1785865889',
    publisher: 'Titan Comics',
    publisher_date: '10-2-2021',
    summary: 'Sit similique quas iste veritatis voluptates Accusantium sequi non voluptates.'
  },
  {
    title: 'Another Kind',
    author: 'Trevor Bream',
    isbn: '006304353X',
    publisher: 'HarperAlley',
    publisher_date: '10-26-2021',
    summary: 'Amet facilis similique culpa non commodi nam? Error facere ipsa'
  },
  {
    title: 'The High 5 habit: Take Control of Your Life with One Simple Habit',
    author: 'Mel Robbins',
    isbn: '1401962122',
    publisher: 'Hay House Inc.',
    publisher_date: '9-28-2021',
    summary: 'Adipisicing temporibus illum sit sapiente est.'
  },
  {
    title: 'The Perfect Day to Boss Up',
    author: 'Rick Ross',
    isbn: '0369705793',
    publisher: 'Hanover Square Press',
    publisher_date: '9-7-2021',
    summary: 'Lorem numquam cumque eos repudiandae molestias ad similique.'
  },
  {
    title: 'Sapiens: A Graphic History, Volume 2 - The Pillars of Civilization',
    author: 'David Vandermeulen, Daniel Casanave, Yuval Noah Harari',
    isbn: '0369705793',
    publisher: 'Harper Perennial',
    publisher_date: '10,26,2021',
    summary: 'Lorem repellendus accusantium enim ex atque Alias praesentium quibusdam neque fugiat'
  },
  {
    title: 'Peak Mind: Find Your Focus, Own Your Attention, Invest 12 Minutes a Day',
    author: 'Amishi P. Jha',
    isbn: '0062992163',
    publisher: 'HarperOne',
    publisher_date: '10-19-2021',
    summary: 'Elit velit provident eaque odit iste.'
  }
]
