import { useState } from "react";

export default function About({ onClose }: { onClose: () => void }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div>
        <img src="/bohusleden/favicon.png" className="w-8" />
      </div>
      <div className="flex-grow justify-self-start max-w-xl mx-auto">
        <div className="text-lg tracking-wider">Bohusleden</div>
        {showMore ? (
          <>
            <div className="text-sm text-justify">
              <p>
                Bohusleden är en vandringsled genom huvudsakligen Bohuslän som
                är uppdelad i 27 etapper. Leden är 34 mil lång. (Källa{" "}
                <a
                  href="https://sv.wikipedia.org/wiki/Bohusleden"
                  target="_blank"
                >
                  Wikipedia
                </a>
                .)
              </p>
              <p>
                Detta är webbplats är en interaktiv karta över Bohusleden, där
                du kan få mer information om etapperna och planera din vandring.
                Mer information om Bohusleden finns på{" "}
                <a
                  href="https://www.westswedentrails.com/en/delled/bohusleden"
                  target="_blank"
                >
                  Bohusledens officiella webbplats
                </a>
                .
              </p>
              <p>
                För att se <strong>mer information om en etapp</strong>, klicka
                på den i kartan.
              </p>
              <p>
                För att <strong>planera en vandring</strong>, peka på start-
                eller slutpunkt och håll intryckt en stund (om du är på mobil)
                eller högerklicka (om du sitter vid en dator). Du kan dra i
                markörerna för att ändra din tur.
              </p>
              <p>
                Källdata om Bohusleden från{" "}
                <a href="https://openstreetmap.org/" target="_blank">
                  OpenStreetMap
                </a>
                , bakgrundskartan från{" "}
                <a href="https://www.lantmateriet.se/" target="_blank">
                  Lantmäteriet
                </a>
                .
              </p>
              <p>
                Webbplatsen är skapad av{" "}
                <a href="https://github.com/perliedman/" target="_blank">
                  Per Liedman
                </a>{" "}
                och är{" "}
                <a
                  href="https://github.com/perliedman/bohusleden"
                  target="_blank"
                >
                  öppen källkod
                </a>
                .
              </p>
            </div>
            <button
              onClick={() => setShowMore(false)}
              className="text-blue-600 text-sm hover:underline"
            >
              Ok!
            </button>
          </>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="text-blue-600 text-sm hover:underline"
          >
            Vad är detta?
          </button>
        )}
      </div>
      <button onClick={onClose} className="text-2xl">
        ×
      </button>
    </>
  );
}
