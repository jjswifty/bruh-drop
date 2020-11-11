import Head from 'next/head'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
    middle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        color: 'red',
    },
}));

export default function Home (props: any) { // Holy shit, this is my first type! any.. 

    const c = useStyles()

    return (
        <div>
            <Head>
                <title>Bruh Drop. Выбей лучший скин! (нет)</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={c.middle}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicinфg elit. Fugiat et iusto rem officiis cum omnis aliquam temporibus optio, eum doloremque numquam ratione repellat fuga inventore maiores autem, ducimus deserunt mollitia.</p>
                <div>
                    <span>Вы человек?</span>
                    <input type="checkbox"/>
                </div>
            </div>
        </div>
    )
}
