interface CardProps {
    rank: string;
    suit: string;
}

const Card = ({ rank, suit }: CardProps) => {
    return (
        <div className='relative bg-zinc-100 rounded-2xl border border-zinc-600 h-[300px] w-[200px]'>
            <div
                className={`absolute top-4 left-4 flex flex-col ${
                    suit == '♣︎' || suit == '♠︎'
                        ? 'text-zinc-950'
                        : 'text-red-600'
                }`}
            >
                <p className='text-2xl'>{rank}</p>
                <p className='text-2xl'>{suit}</p>
            </div>

            <div
                className={`absolute bottom-4 right-4  flex flex-col rotate-180  ${
                    suit == '♣︎' || suit == '♠︎'
                        ? 'text-zinc-950'
                        : 'text-red-600'
                }`}
            >
                <p className='text-2xl'>{rank}</p>
                <p className='text-2xl'>{suit}</p>
            </div>
        </div>
    );
};

export default Card;
