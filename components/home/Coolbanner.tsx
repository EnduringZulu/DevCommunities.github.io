import Typewriter from "typewriter-effect";
interface Iprops {
    className?: string
}
export default function Coolbanner(props: Iprops) {
    return (
        <div className={props.className ?? ""}>
            <div className="text-5xl text-right">
                <h1 className='pt-5'>
                    <span className="underline" id="title">DevCommu</span>
                    <span>คือ</span>
                </h1>
                <h1 className="pt-5 flex flex-row flex-wrap justify-end">
                    <span className="underline text-red-600" >
                        <Typewriter
                            options={{
                                strings: ['คอมมูนิตี้', 'โรงเรียน', 'แคมป์'],
                                autoStart: true,
                                loop: true,
                                delay: 200,
                                deleteSpeed: 10,
                            }}
                        />
                    </span>
                    <span>สำหรับ</span>
                </h1>
                <h1 className="pt-5 flex flex-row flex-wrap justify-end">
                    <span className="underline text-green-400" >
                        <Typewriter
                            options={{
                                strings: ['นักเรียน', 'โปรแกรมเมอร์', 'คนชอบคอม', 'คนอยากทำเว็บ', 'คนชอบไอที', 'คนอยากทำ AI'],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 100,
                            }}
                        />
                    </span>
                    <span>เพื่อ</span>
                    <span className="underline text-violet-600" >
                        <Typewriter
                            options={{
                                strings: ['เรียนรู้', 'ทำโปรเจ็ค', 'เจอเพื่อน'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 100,
                            }}
                        />
                    </span>
                </h1>
            </div>
        </div>
    )
}
