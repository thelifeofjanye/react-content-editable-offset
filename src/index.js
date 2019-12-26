import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App() {
	const [start, setStart] = useState(0)
	const [end, setEnd] = useState(0)

	function getSelectionCharacterOffsetWithin(elm) {
		let start = 0
		let end = 0
		const win = elm.ownerDocument.defaultView
		let selection = win.getSelection()
		if (selection.rangeCount > 0) {
			const range = win.getSelection().getRangeAt(0)
			const preCaretRange = range.cloneRange()
			preCaretRange.selectNodeContents(elm)
			preCaretRange.setEnd(range.startContainer, range.startOffset)
			start = preCaretRange.toString().length
			preCaretRange.setEnd(range.endContainer, range.endOffset)
			end = preCaretRange.toString().length
		}
		return { start, end }
	}

	const editable = useRef()

	const selectionHandle = () => {
		const selectionOffset = getSelectionCharacterOffsetWithin(
			editable.current
		)
		setStart(selectionOffset.start)
		setEnd(selectionOffset.end)
	}

	return (
		<div className="App">
			<div
				ref={editable}
				onMouseUp={() => selectionHandle()}
				onKeyDown={() => selectionHandle()}
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				<div>
					⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄<r>⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄</r>
					⠄⠄⠄⠄
				</div>
				<div>
					⠄⠄⠄⠄⠄<y>⢀⣀⣀⡀</y>⠄⠄⠄⡠
					<r>⢲⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀</r>⠄⠄
				</div>
				<div>
					⠄⠄⠄<y>⠔⣈⣀⠄⢔⡒⠳</y>⡴⠊⠄
					<r>⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣧⠄</r>⠄
				</div>
				<div>
					⠄<y>⢜⡴⢑⠖⠊⢐⣤⠞⣩</y>⡇⠄⠄⠄
					<r>⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠝⠛⠋</r>⠐
				</div>
				<div>
					<y>⢸⠏⣷⠈⠄⣱⠃⠄⢠⠃</y>⠐⡀⠄⠄⠄⠄
					<r>⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛</r>⠸⠄⠄⠄⠄
				</div>
				<div>
					<y>⠈⣅⠞⢁⣿⢸⠘⡄⡆⠄⠄</y>⠈⠢⡀⠄⠄⠄⠄⠄⠄
					<r>⠉⠙⠛⠛⠛⠉⠉</r>⡀⠄⠡⢀⠄⣀
				</div>
				<div>
					<y>⠄⠙⡎⣹⢸⠄⠆⢘⠁⠄⠄⠄⢸</y> ⠈⠢⢄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠃⠄⠄⠄⠄⠄
				</div>
				<div>
					⠄⠄<y>⠑⢿⠈⢆⠘⢼⠄⠄⠄⠄⠸⢐⢾⠄⡘⡏⠲⠆⠠⣤⢤⢤⡤⠄⣖⡇</y>⠄⠄⠄⠄⠄
				</div>
				<div>
					<y>
						<r>⣴⣶⣿⣿⣣</r>⣈⣢⣸⠄⠄⠄⠄
					</y>
					<g>⡾⣷⣾⣮⣤</g>
					<y>⡏⠁⠘⠊ </y>
					<g>⢠⣷⣾⡛</g>
					<ss>⡟</ss>
					<y>⠈⠄</y>⠄⠄⠄⠄⠄
				</div>
				<div>
					<y>
						<r>⣿⣿⣿⣿⣿</r>⠉⠒⢽⠄⠄⠄⠄
					</y>
					<g>⡇⣿⣟⣿⡇</g>
					<ss>⠄⠄⠄⠄ </ss>
					<g>⢸⣻⡿⡇</g>
					<ss>⡇</ss>
					<y>⠄⠄</y>⠄⠄⠄⠄⠄
				</div>
				<div>
					<r>⠻⣿⣿⣿⣿⣄</r>
					<y>⠰⢼⠄⠄⠄⡄</y>
					<g>⠁⢻⣍⣯⠃</g>
					<ss>⠄⠄⠄⠄</ss> <g>⠈⢿⣻⠃</g>
					<ss>⠈⡆</ss>
					<y>⡄</y>⠄⠄⠄⠄⠄
				</div>
				<div>
					⠄
					<y>
						<r>⠙⠿⠿⠛⣿⣶⣤</r>⡇⠄⠄⢣
					</y>
					<ss>
						⠄⠄⠈⠄⢠<m>⠂⠄⠁⠄</m>⡀⠄⠄⣀⠔⢁
					</ss>
					<y>⠃</y>⠄⠄⠄⠄⠄
				</div>
				<div>
					⠄⠄⠄⠄⠄<r>⣿⣿⣿⣿⣾</r>
					<y>⠢⣖</y>
					<r>⣶⣦⣤⣤⣬⣤⣤⣤⣴⣶⣶⡏</r>⠠<y>⢃⠌</y>⠄⠄⠄⠄⠄⠄
				</div>
				<div>
					⠄⠄⠄⠄⠄<r>⠿⠿⠟⠛</r>⡹<r>⠉⠛⠛⠿⠿⣿</r>
					<g>⣿⣿⣿⣿</g>
					<r>⡿⠂</r>⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
				</div>
				<div>
					⠠⠤⠤⠄⠄<r>⣀⠄⠄⠄</r>⠑⠠⣤⣀⣀⣀<g>⡘⣿⠿⠙⠻⡍</g>⢀⡈⠂⠄⠄⠄⠄⠄⠄⠄⠄⠄
				</div>
				<div>
					⠄⠄⠄⠄⠄<r>⠄⠑⠠⣠⣴⣾⣿⣿⣿⣿⣿⣿⣇</r>⠉⠄<r>⠻⣿⣷⣄⡀</r>⠄⠄⠄⠄⠄⠄⠄⠄
				</div>
				<div>
					<br />
				</div>
			</div>
			<div>
				{start} l {end}
			</div>
		</div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
