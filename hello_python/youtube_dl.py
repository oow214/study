import youtube_dl

with youtube_dl.YoutubeDL() as ydl:
		ydl.download(['https://www.yotube.com/watch?v=Hello123'])