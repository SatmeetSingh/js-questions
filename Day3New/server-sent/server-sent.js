//57 	What are server-sent events

// A server-sent event is when a web page automatically gets updates from a server.

// Server-Sent Events (SSE) is a technology that enables servers to push real-time updates to web clients over HTTP. Allowing the server to send events or data updates to the client without the client having to continuously poll the server for updates.

// key features
// Event-Based Communication: The server sends events to the client, which can be handled by JavaScript code running in the client's browser.

// SSE uses the HTTP protocol, specifically the text/event-stream content type, to establish a persistent connection between the server and the client.

// unidiectional connection from server to client
// text/event-stream

//  header - text/event-stream , transfer-encoding chunked
// keep sending more chunks

// live feeds - streaming , live blogs
// showing client progress
// Logging

// eg   - raw sse client/server with nodejs

// pro
// Lightweight
// http and http/2  compatible - only hijack one screen
// firewall freindly

// cons
// proxyiny is tricky
// hard to scale
