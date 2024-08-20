import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className="mr-40">
            <div>
                <Link href="/quiz">
                    <button>Round 1</button>
                </Link>
            </div>
            <div>
                <Link href="/quiz2">
                    <button>Round 2</button>
                </Link>
            </div>
            <div>
                <Link href="/quiz3">
                    <button>Round 3</button>
                </Link>
            </div>
            <div>
                <Link href="/quiz4">
                    <button>Round 4</button>
                </Link>
            </div>

        </div>
    )
}

export default page
