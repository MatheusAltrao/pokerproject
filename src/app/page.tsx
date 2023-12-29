'use client';

import Card from '@/components/Card';
import { useEffect, useState } from 'react';

interface CardProps {
    suit: string;
    rank: string;
}

export default function Home() {
    const [rankState, setRankState] = useState('');
    const [suitState, setSuitState] = useState('');
    const [cards, setCards] = useState<CardProps[]>([]);

    const suits = ['♦︎', '♣︎', '♥︎', '♠︎'];

    enum letterRanks {
        J = 11,
        Q = 12,
        K = 13,
        A = 14,
    }

    const ranks = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        letterRanks[letterRanks.J].toString(),
        letterRanks[letterRanks.Q].toString(),
        letterRanks[letterRanks.K].toString(),
        letterRanks[letterRanks.A].toString(),
    ];

    const handleAddCard = () => {
        const newCard = {
            suit: suitState,
            rank:
                rankState === 'J' ||
                rankState === 'Q' ||
                rankState === 'K' ||
                rankState === 'A'
                    ? letterRanks[
                          rankState as keyof typeof letterRanks
                      ].toString()
                    : rankState,
        };

        setCards((prev) => [...prev, newCard]);
    };

    const handleVerifyCombination = () => {
        cards.sort()

        let ranksArray: number[] = []
        
        cards.forEach(card => {
            ranksArray.push(Number(card.rank))
        });

        let result = countOccurrences(ranksArray)
        console.log(result)
    };

    function countOccurrences(numbers: any) {
        const counts: any = {};
        for (const number of numbers) {
            counts[number] ? counts[number]++ : counts[number] = 1
        }

        const results = Object.entries(counts).map(([number, count]) => ({
          numero: number,
          quantidade: count,
        }));
      
        return results;
      }

    return (
        <div className='min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center gap-8 '>
            <div className='flex items-center justify-center gap-4'>
                <select
                    onChange={(e) => setRankState(e.target.value)}
                    value={rankState}
                    className='bg-zinc-900 rounded border border-zinc-600 h-[40px] w-[200px] '
                >
                    <option selected>Selecione o valor</option>
                    {ranks.map((rank, index) => (
                        <option key={index}>{rank}</option>
                    ))}
                </select>

                <select
                    onChange={(e) => setSuitState(e.target.value)}
                    value={suitState}
                    className='bg-zinc-900 rounded border border-zinc-600 h-[40px] w-[200px] '
                >
                    <option selected>Selecione o naipe</option>
                    {suits.map((suit, index) => (
                        <option key={index}>{suit}</option>
                    ))}
                </select>

                <button
                    onClick={handleAddCard}
                    className='h-10 px-2 rounded bg-green-600 hover:opacity-80 transition-opacity'
                >
                    Adicionar
                </button>
            </div>

            <div className='flex items-center justify-center flex-col gap-16'>
                <div className='flex items-center justify-center gap-4 h-[300px]'>
                    {cards.length > 0 &&
                        cards.map((card, index) => (
                            <Card
                                key={index}
                                rank={
                                    letterRanks[Number(card.rank)] || card.rank
                                }
                                suit={card.suit}
                            />
                        ))}
                </div>

                <div className='flex items-center justify-center gap-4'>
                    {cards.length > 0 && (
                        <button
                            onClick={() => setCards([])}
                            className='h-10 px-2 rounded bg-blue-600 hover:opacity-80 transition-opacity'
                        >
                            Limpar
                        </button>
                    )}

                    {cards.length > 0 && (
                        <button
                            onClick={handleVerifyCombination}
                            className='h-10 px-2 rounded bg-blue-600 hover:opacity-80 transition-opacity'
                        >
                            Verificar sequencia
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
