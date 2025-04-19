<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futebol ao vivo grátis</title>
    <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />
    <style>
        .options_iframe {
            text-align: center;
            margin: 20px 0;
        }

        .options_iframe a {
            display: inline-block;
            padding: 10px 20px;
            margin: 5px;
            background-color: green;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .options_iframe a:hover {
            background-color: darkgreen;
        }

        .plyr--full-ui input[type=range] {
            color: green;
        }

        .plyr__control--overlaid {
            background-color: green;
        }

        .plyr__control--overlaid:hover {
            background-color: darkgreen;
        }

        .image-post {
            text-align: center;
        }

        .video-container, .iframe-container {
            display: none;
        }

        .video-container.active, .iframe-container.active {
            display: block;
        }

        .iframe-container iframe {
            width: 100%;
            height: 500px;
            border: none;
        }
    </style>
</head>
<body>
    <div class="image-post">
        <h2></h2>
        
        <!-- Container do Player de Vídeo -->
        <div class="video-container active" id="video-container">
            <video id="player" controls>
                <source id="video-source" src="https://s2.choraporco.icu/fontes/embedtv/premiere4.m3u8" type="application/x-mpegURL">
                Seu navegador não suporta a tag de vídeo.
            </video>
        </div>

        <!-- Container do Iframe -->
        <div class="iframe-container" id="iframe-container">
            <iframe id="iframe-player" src="" allowfullscreen></iframe>
        </div>

        <div class="options_iframe">
            <a href="javascript:void(0)" onclick="changePlayerUrl('https://s2.choraporco.icu/fontes/embedtv/espn4.m3u8', 'application/x-mpegURL')">transmissão 1</a>
          <a href="javascript:void(0)" onclick="changePlayerUrl('https://tvsmarters.org/espn4/video.m3u8', 'application/x-mpegURL')">transmissão 2</a>
          
            <a href="javascript:void(0)" onclick="useIframe('https://sinalpublico.vercel.app/play/dtv.html?id=espn4')">transmissão 3</a>

        </div>
    </div>

    <!-- Plyr.io script -->
    <script src="https://cdn.plyr.io/3.6.12/plyr.polyfilled.js"></script>
    <!-- HLS.js script -->
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const videoContainer = document.getElementById('video-container');
            const iframeContainer = document.getElementById('iframe-container');
            const video = document.getElementById('player');
            const videoSource = document.getElementById('video-source');
            const iframePlayer = document.getElementById('iframe-player');
            let hls;
            let player;

            // Função para alterar o player de vídeo
            function changePlayerUrl(url, type) {
                // Garantir que o iframe seja desativado
                iframeContainer.classList.remove('active');
                iframePlayer.src = '';

                // Ativar o player de vídeo
                videoContainer.classList.add('active');

                // Pausar o vídeo atual e carregar a nova fonte
                if (hls) {
                    hls.destroy();
                    hls = null;
                }

                video.pause();
                videoSource.src = url;
                videoSource.type = type;

                if (type === 'application/x-mpegURL' && Hls.isSupported()) {
                    hls = new Hls();
                    hls.loadSource(url);
                    hls.attachMedia(video);
                } else {
                    video.load();
                }
            }

            // Função para alternar para o iframe
            function useIframe(url) {
                // Garantir que o player de vídeo seja desativado
                videoContainer.classList.remove('active');
                video.pause();

                // Ativar o iframe e carregar a URL
                iframeContainer.classList.add('active');
                iframePlayer.src = url;
            }

            // URL inicial (HLS)
            const initialUrl = 'https://s2.choraporco.icu/fontes/embedtv/premiere4.m3u8';
            changePlayerUrl(initialUrl, 'application/x-mpegURL');

            player = new Plyr(video);

            // Expor funções globais
            window.changePlayerUrl = changePlayerUrl;
            window.useIframe = useIframe;
        });
    </script>
</body>
</html>
