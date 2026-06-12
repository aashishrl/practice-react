const ControlPanel = ({counter, pauseCounter,continueCounter, resetCounter}) => {
    return (
        <section className="p-20">
            <h1 className="mb-4 text-3xl font-semibold text-green-400">Real Time Dashboard</h1>
            <p>Counter: <span className="font-bold text-sm">{counter}</span></p>
            <div className="flex gap-2 mt-2">
                <button onClick={pauseCounter} className="px-4 py-1 text-sm text-white bg-green-700 rounded-sm border-none!">Pause Counter</button>
                <button onClick={continueCounter} className="px-4 py-1 text-sm text-white bg-yellow-700 rounded-sm border-none!">Continue Counter</button>
                <button onClick={resetCounter} className="px-4 py-1 text-sm text-white bg-blue-700 rounded-sm border-none!">Reset Counter</button>
            </div>
        </section>
    )
}

export default ControlPanel;