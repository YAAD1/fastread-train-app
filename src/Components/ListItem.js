import "./ListItem.css";
import React, { useState } from "react";
function ListItem() {
  const Words = [
    "merhaba",
    "dünya",
    "javascript",
    "programlama",
    "liste",
    "kelime",
    "fonksiyon",
    "değişken",
    "dizgi",
    "döngü",
    "koşul",
    "nesne",
    "metot",
    "parametre",
    "argüman",
    "sözdizimi",
    "karakter",
    "sayı",
    "boolean",
    "dizi",
    "nesne",
    "ifade",
    "değişim",
    "fonksiyonel",
    "yapısal",
    "dallanma",
    "döngü",
    "koşul",
    "sorgu",
    "kod",
    "program",
    "geliştirme",
    "yazılım",
    "bilgisayar",
    "öğrenme",
    "eğitim",
    "kaynak",
    "derleme",
    "yorumlama",
    "çalışma",
    "proje",
    "uygulama",
    "örnek",
    "örüntü",
    "algoritma",
    "veri",
    "bilgi",
    "çıktı",
    "giriş",
    "çıktı",
    "hata",
    "hata",
    "iyileştirme",
    "optimizasyon",
    "debug",
    "test",
    "birim",
    "entegrasyon",
    "kullanıcı",
    "arayüz",
    "veritabanı",
    "sunucu",
    "istemci",
    "ağ",
    "web",
    "mobil",
    "uygulama",
    "platform",
    "sistem",
    "yapı",
    "kütüphane",
    "framework",
    "kodlama",
    "yazma",
    "derleme",
    "yorumlama",
    "yapılandırma",
    "kurulum",
    "dağıtım",
    "dağıtım",
    "versiyon",
    "kaynak",
    "hedef",
    "hedef",
    "hedef",
    "kapsam",
    "kapsam",
    "belgeleme",
    "dökümantasyon",
    "talimat",
    "rehber",
    "örnek",
    "demo",
    "gösterim",
    "çalıştırma",
    "derleme",
    "yürütme",
    "çalışma",
    "çalışma",
    "tamamlama",
    "yaklaşım",
    "strategi",
    "prosedür",
    "işlem",
    "adım",
    "aşama",
    "metodoloji",
    "metrik",
    "ölçüm",
    "performans",
    "verimlilik",
    "işlevsellik",
    "güvenlik",
    "gizlilik",
    "sürdürülebilirlik",
    "uyumluluk",
    "standart",
    "kriter",
    "kılavuz",
    "belirtim",
    "doğruluk",
    "kesinlik",
    "güvenilirlik",
    "güvenirlik",
    "esneklik",
    "genişletilebilirlik",
    "özelleştirme",
    "yeniden kullanılabilirlik",
    "yeniden kullanma",
    "verimlilik",
    "performans",
    "hata ayıklama",
    "problem çözme",
    "optimizasyon",
    "iyileştirme",
    "geliştirme",
    "geliştirme",
    "yükseltme",
    "sürüm",
    "düzeltme",
    "yama",
    "yükleme",
    "kurulum",
    "konfigürasyon",
    "entegrasyon",
    "dağıtım",
    "teslimat",
    "dağıtım",
    "yayınlama",
    "dağıtım",
    "süreç",
    "yönetim",
    "planlama",
    "organizasyon",
    "koordinasyon",
    "liderlik",
    "eğitim",
    "destek",
    "yardım",
    "belirtim",
    "analiz",
    "tasarım",
    "geliştirme",
    "test",
    "dağıtım",
    "devreye alma",
    "destek",
    "bakım",
    "güncelleme",
    "yenileme",
    "güncelleme",
    "yedekleme",
    "geri yükleme",
    "iyileştirme",
    "hata düzeltme",
    "güvenlik yaması",
    "gereksinimler",
    "fonksiyonlar",
    "istemler",
    "özellikler",
    "öncelikler",
    "kısıtlamalar",
    "tahminler",
    "tahminler",
    "varsayımlar",
    "hedefler",
    "amaçlar",
    "beklentiler",
    "kullanıcı gereksinimleri",
    "sistem gereksinimleri",
    "teknik gereksinimler",
    "performans gereksinimleri",
    "güvenlik gereksinimleri",
    "uyumluluk gereksinimleri",
    "belirlilik",
    "doğruluk",
    "kesinlik",
    "tamamlık",
    "güvenilirlik",
    "güvenirlik",
    "esneklik",
    "genişletilebilirlik",
    "uyumluluk",
    "standartlar",
    "kılavuzlar",
    "belirtiler",
    "doğruluk",
    "kesinlik",
    "güvenilirlik",
    "güvenirlik",
    "esneklik",
    "genişletilebilirlik",
    "özelleştirme",
    "yeniden kullanılabilirlik",
    "yeniden kullanma",
    "verimlilik",
    "performans",
    "hata ayıklama",
    "problem çözme",
    "optimizasyon",
    "iyileştirme",
    "geliştirme",
    "geliştirme",
    "yükseltme",
    "sürüm",
    "düzeltme",
    "yama",
    "yükleme",
  ];

  const [count, setCount] = useState(0);
  const [clickcounter, setclick] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const clickincrement = () => {
    setclick(clickcounter + 1);
  };

  String.prototype.shuffle = function () {
    var a = this.split("");
    var n = a.length;
    for (var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  };

  let text = Words[count];
  let length = text.length;
  let charHead = text.charAt(0);
  let charTail = text.charAt(length - 1);
  let charBody = text.slice(1, length - 1);
  let shuffuledcharBody = charBody.shuffle();


  return (
    <div className="div1">
      <div>
        <div>
          <a className="clickcounter">{clickcounter}</a>
          <button onClick={decrement}>Last Word</button>
          <button
            onClick={() => {
              increment();
              clickincrement();
            }}
          >
            Next Word
          </button>
        </div>
        <a className="ad">{charHead}</a>
        <a className="ad1">{charBody}</a>
        <a className="ad">{charTail}</a>
      </div>
    </div>
  );
}
export default ListItem;
