export type User = {
	id: string
	username: string
	room: string
	isHost: boolean
	peerConnection: RTCPeerConnection
}
