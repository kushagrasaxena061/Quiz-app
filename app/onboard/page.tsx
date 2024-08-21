// pages/index.js
import AnimatedList from './_components/AnimatedList';

export default function Home() {
    const rounds = Array.from({ length: 14 }, (_, i) => `Round ${i + 1}`);
    const urls = [
        '/quiz',
        '/quiz2',
        '/quiz3',
        '/quiz4',
        '/quiz5',
        '/quiz6',
        '/quiz7',
        '/quiz8',
        '/quiz9',
        '/quiz10',
        '/quiz11',
        '/quiz12',
        '/quiz13',

    ];

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <AnimatedList rounds={rounds} urls={urls} />
        </div>
    );
}
