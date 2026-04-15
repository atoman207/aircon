import Image from "next/image";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <header className="main-header">
        <div className="header-inner">
          <a href="#" className="logo-link">
            <Image className="logo-img" alt="Logo" src="/images/Link - ホーム.png" width={200} height={60} />
          </a>

          <div className="actions-wrapper">
            <div className="phone-container">
              <div className="phone-label">無料相談・今すぐ電話</div>
              <a href="tel:0120000000" className="phone-number">
                <svg className="phone-icon-svg" viewBox="0 0 24 24">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>
                0120-000-000
              </a>
            </div>

            <div className="btn-group">
              <a href="/line" className="btn btn-line">LINE相談</a>
              <a href="#contact-right" className="btn btn-quote">無料お見積り</a>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg">
          <div className="slide slide-1"></div>
          <div className="slide slide-2"></div>
          <div className="slide slide-3"></div>
          <div className="overlay"></div>
        </div>

        <div className="hero-container">
          <div className="badge badge-left">
            <div className="icon-circle-badge">
              <Image src="/images/Star 1.png" alt="Star" className="badge-icon-img" width={24} height={24} />
            </div>
            <div className="badge-text">
              <b>年間5000台実績</b><br />【関東圏】対応
            </div>
          </div>

          <div className="badge badge-right">
            <div className="icon-circle-badge">
              <Image src="/images/SVG.png" alt="Shield" className="badge-icon-img" width={24} height={24} />
            </div>
            <div className="badge-text">
              <b>安心の損害保険</b><br />全業者加入済み
            </div>
          </div>

          <div className="hero-content">
            <h1 className="hero-main-title">
              エアコンのニオイ・カビを<span className="highlight">徹底洗浄</span>！
            </h1>
            <p className="description hero-lead">
              プロの分解クリーニングで空気をキレイに
            </p>
            <p className="hero-trustline">
              【関東圏】対応｜即日OK｜年間5000台実績
            </p>

            <div className="cta-buttons">
              <a href="tel:0120000000" className="btn-large btn-white-phone">
                <Image src="/images/Group 1314.png" alt="" className="btn-icon-img" width={50} height={50} /> 0120-000-000
              </a>
              <a href="#" className="btn-large btn-orange-quote">無料お見積りはこちら</a>
            </div>

            <a href="/line" className="line-footer">
              <Image src="/images/SVG (1).png" alt="" className="line-icon-img" width={20} height={20} />
              <span>LINEでもお気軽にご相談ください</span>
            </a>
          </div>

          <div className="feature-bar">
            <div className="feature-text">
              <h3>関東圏対応</h3>
              <p>首都圏エリア対応</p>
            </div>
            <div className="feature-text">
              <h3>最短即日</h3>
              <p>スピード対応</p>
            </div>
            <div className="feature-text">
              <h3>明確料金</h3>
              <p>事前見積もり</p>
            </div>
            <div className="feature-text">
              <h3>安心</h3>
              <p>丁寧なサポート</p>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-container">
        <div className="problem-wrapper">
          <p className="problem-label">Problem</p>
          <p className="small-tagline">こんなお悩みありませんか？</p>
          <h2 className="main-heading">
            エアコンの不調、<span className="highlight">放置していませんか？</span>
          </h2>
        </div>
      </section>

      <section className="problem-cards">
        <div className="container">
          <div className="grid">
            <div className="card">
              <div className="icon-box">
                <Image src="/images/SVG (2).png" alt="Smell" width={30} height={30} />
              </div>
              <div className="card-content">
                <h3>エアコンから嫌な臭いがする</h3>
                <p>内部に溜まったカビやホコリが悪臭の原因です</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <Image src="/images/SVG (3).png" alt="Mold" width={30} height={30} />
              </div>
              <div className="card-content">
                <h3>カビや汚れが</h3>
                <p>見えない内部にカビが大量繁殖している可能性があります</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <Image src="/images/SVG (4).png" alt="Efficiency" width={30} height={30} />
              </div>
              <div className="card-content">
                <h3>効きが悪く電気代が高い</h3>
                <p>汚れが熱交換効率を低下させ、余計な電力を消費します</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <Image src="/images/SVG (5).png" alt="Health" width={30} height={30} />
              </div>
              <div className="card-content">
                <h3>子供・家族の健康が心配</h3>
                <p>カビやホコリはアレルギーや健康被害の原因になります</p>
              </div>
            </div>
          </div>

          <div className="warning-banner">
            <span className="warning-icon">⚠️</span>
            そのまま放置すると健康被害や故障の原因になることも
          </div>
        </div>
      </section>

      <section className="problem-container2">
        <div className="problem-wrapper2">
          <p className="problem-label2">Service</p>
          <p className="small-tagline2">サービス内容</p>
          <h2 className="main-heading2">
            プロによる<span className="highlight2">徹底洗浄</span>
          </h2>
        </div>
      </section>

      <section className="cleaning-process">
        <div className="container">
          <div className="flex-wrapper">
            <div className="feature-list">

              <div className="feature-item">
                <div className="icon-circle2">
                  <Image src="/images/SVG (6).png" alt="Disassembly" width={24} height={24} />
                </div>
                <div className="text-box">
                  <h3>分解洗浄</h3>
                  <p>エアコン本体を分解し、普段手の届かない内部まで徹底的に洗浄します。</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="icon-circle2">
                  <Image src="/images/SVG (7).png" alt="High Pressure" width={24} height={24} />
                </div>
                <div className="text-box">
                  <h3>高圧洗浄</h3>
                  <p>専用の高圧洗浄機で、頑固なカビや汚れを一気に除去します。</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="icon-circle2">
                  <Image src="/images/SVG (8).png" alt="Mold Removal" width={24} height={24} />
                </div>
                <div className="text-box">
                  <h3>カビ・雑菌除去</h3>
                  <p>アレルギーの原因にもなるカビや雑菌を根本から取り除きます。</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="icon-circle2">
                  <Image src="/images/SVG (9).png" alt="Drying" width={24} height={24} />
                </div>
                <div className="text-box">
                  <h3>完全乾燥</h3>
                  <p>洗浄後は完全に乾燥させ、すぐに快適にご使用いただけます。</p>
                </div>
              </div>

            </div>

            <div className="image-box">
              <Image src="/images/Rectangle 122.png" alt="Professional Worker" className="process-img" width={500} height={600} />
            </div>
          </div>
        </div>
      </section>

      <section className="problem-container3">
        <div className="problem-wrapper3">
          <p className="small-tagline3">作業の流れ</p>
          <h2 className="main-heading3">
            お近くの提携業者が対応します
          </h2>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container">
          <div className="process-steps">

            <div className="step-item">
              <div className="step-number">01</div>
              <h3 className="step-title">お問い合わせ</h3>
              <p className="step-desc">お電話・フォームからご連絡</p>
            </div>

            <div className="step-item">
              <div className="step-number">02</div>
              <h3 className="step-title">日程調整</h3>
              <p className="step-desc">当社がご都合に合わせて調整</p>
            </div>

            <div className="step-item">
              <div className="step-number">03</div>
              <h3 className="step-title">業者手配</h3>
              <p className="step-desc">お近くの提携業者を選定</p>
            </div>

            <div className="step-item">
              <div className="step-number">04</div>
              <h3 className="step-title">施工</h3>
              <p className="step-desc">プロが丁寧に洗浄作業</p>
            </div>

            <div className="step-item">
              <div className="step-number">05</div>
              <h3 className="step-title">お支払い</h3>
              <p className="step-desc">作業完了後にお支払い</p>
            </div>

          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-header">
            <span className="label">Pricing</span>
            <p className="sub-label">料金案内</p>
            <h2>明確な料金説明<span className="highlight5">で安心</span></h2>
            <p className="notice">※地域・時期により変動あり | 事前見積もりで安心</p>
          </div>

          <div className="pricing-grid">
            <div className="price-card">
              <h3>壁掛けエアコン</h3>
              <div className="amount">
                <span className="tax">税込</span>
                <span className="price">10,000</span>
                <span className="unit">円〜</span>
              </div>
              <ul className="features">
                <li>分解洗浄</li>
                <li>高圧洗浄</li>
                <li>カビ・雑菌除去</li>
                <li>完全乾燥</li>
              </ul>
              <a href="#" className="btn-outline">お見積りはちら</a>
            </div>

            <div className="price-card featured">
              <div className="popular-badge">人気No.1</div>
              <h3>お掃除機能付き</h3>
              <div className="amount">
                <span className="tax">税込</span>
                <span className="price">18,000</span>
                <span className="unit">円〜</span>
              </div>
              <ul className="features">
                <li>分解洗浄</li>
                <li>高圧洗浄</li>
                <li>カビ・雑菌除去</li>
                <li>完全乾燥</li>
              </ul>
              <a href="#" className="btn-filled">お見積りはちら</a>
            </div>

            <div className="price-card">
              <h3>壁掛けエアコン</h3>
              <div className="amount">
                <span className="price-text">要見積もり</span>
              </div>
              <ul className="features">
                <li>分解洗浄</li>
                <li>高圧洗浄</li>
                <li>カビ・雑菌除去</li>
                <li>完全乾燥</li>
              </ul>
              <a href="#" className="btn-outline">お見積りはちら</a>
            </div>
          </div>

          <div className="options-container">
            <div className="options-title">
              <span className="arrow"></span> オプション
            </div>
            <div className="options-grid">
              <div className="option-item">
                <span>防カビコート</span>
                <span className="opt-price">+2,500円</span>
              </div>
              <div className="option-item">
                <span>室外機洗浄</span>
                <span className="opt-price">+3,000円</span>
              </div>
              <div className="option-item">
                <span>2台目以降割引</span>
                <span className="opt-price">1台につき1,000円OFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-container2">
        <div className="problem-wrapper2">
          <p className="problem-label2">Why Choose Us</p>
          <p className="small-tagline2">選ばれる理由</p>
          <h2 className="main-heading2">
            当社が<span className="highlight2">選ばれる理由</span>
          </h2>
          <p className="notice">安心して頼める窓口として</p>
        </div>
      </section>

      <div className="features-container">
        <div className="feature-card">
          <div className="icon-circle-ele">
            <Image src="/images/SVG (13).png" alt="Network icon" width={42} height={42} />
          </div>
          <h3>全国対応のネットワーク</h3>
          <p>全国の提携業者から、お客様に最適なプロをご案内します。</p>
        </div>

        <div className="feature-card">
          <div className="icon-circle-ele">
            <Image src="/images/SVG (10).png" alt="Partners icon" width={42} height={42} />
          </div>
          <h3>厳選された提携業者</h3>
          <p>確かな技術と実績を持つ、厳選された業者のみと提携しています。</p>
        </div>

        <div className="feature-card">
          <div className="icon-circle-ele">
            <Image src="/images/SVG (11).png" alt="Speed icon" width={42} height={42} />
          </div>
          <h3>最短即日対応</h3>
          <p>お急ぎの場合も、最短即日で対応可能です。</p>
        </div>

        <div className="feature-card">
          <div className="icon-circle-ele">
            <Image src="/images/SVG (12).png" alt="Support icon" width={42} height={42} />
          </div>
          <h3>丁寧なカスタマー対応</h3>
          <p>お問い合わせから施工完了まで、当社が丁寧にサポートします。</p>
        </div>

        <div className="feature-card">
          <div className="icon-circle-ele">
            <Image src="/images/SVG (6).png" alt="分解対応" width={42} height={42} />
          </div>
          <h3>完全分解対応</h3>
          <p>内部まで丁寧に分解し、汚れやカビを徹底洗浄します。</p>
        </div>

        <div className="feature-card">
          <div className="icon-circle-ele">
            <Image src="/images/SVG (10).png" alt="損害保険" width={42} height={42} />
          </div>
          <h3>損害保険加入済み</h3>
          <p>万が一の際も安心。提携業者は損害保険に加入しています。</p>
        </div>
      </div>

      <div className="container-area">
        <header className="service-header">
          <div className="header-left">
            <span className="label-visual">ビジュアル</span>
            <h2 className="title">サービス<span className="highlight3">イメージ</span></h2>
            <p className="sub-description">施工イメージの参考写真です。実際の仕上がりはお住まいの機種・状態により異なります。</p>
          </div>
          <div className="small-icons">
            <div className="small-icon-circle">
              <Image src="/images/SVG (14).png" alt="swap icon" width={20} height={20} />
            </div>
            <div className="small-icon-circle">
              <Image src="/images/SVG (15).png" alt="history icon" width={20} height={20} />
            </div>
            <div className="small-icon-circle">
              <Image src="/images/SVG (16).png" alt="shield icon" width={20} height={20} />
            </div>
            <div className="small-icon-circle">
              <Image src="/images/SVG (17).png" alt="sparkle icon" width={20} height={20} />
            </div>
          </div>
        </header>

        <div className="gallery-grid">
          <div className="cards">
            <Image src="/images/Rectangle 141 copy.png" alt="Indoor Unit" width={350} height={280} />
            <div className="card-label">清潔な室内機</div>
          </div>
          <div className="cards">
            <Image src="/images/Rectangle 142 copy.png" alt="Work Process" width={350} height={280} />
            <div className="card-label">丁寧な施工イメージ</div>
          </div>
          <div className="cards">
            <Image src="/images/Rectangle 143 copy.png" alt="Pro Staff" width={350} height={280} />
            <div className="card-label">プロによる対応</div>
          </div>
        </div>

        <footer className="service-footer">
          <p className="footer-note">参考にしたサービス比較・マッチングサイト（新しいタブで開きます）</p>
          <div className="links-wrap">
            <a href="#" target="_blank">ミスター（エアコン清掃）</a>
            <a href="#" target="_blank">ミツモア（エアコンクリーニング）</a>
            <a href="#" target="_blank">ゼヒトモ（エアコンクリーニング）</a>
          </div>
        </footer>
      </div>

      <section className="problem-container2">
        <div className="problem-wrapper2">
          <p className="problem-label2">BEFORE & AFTER</p>
          <p className="small-tagline2">選ばれる理由</p>
          <h2 className="main-heading2">
            <span className="highlight2">ビフォー・アフター</span>
          </h2>
          <p className="notice">実際の洗浄効果をご覧ください</p>
        </div>
      </section>

      <div className="cleaning-card">
        <div className="image-container">
          <div className="side before">
            <div className="label before-label">BEFORE</div>
          </div>

          <div className="divider-arrow">
            <span className="arrow-icon">&rarr;</span>
          </div>

          <div className="side after">
            <div className="label after-label">AFTER</div>
          </div>
        </div>

        <div className="content-bar">
          <h3>フィルター・熱交換器の洗浄</h3>
          <p>真っ黒なカビ汚れがピカピカに。悪臭も完全消臭。</p>
        </div>
      </div>

      <section className="problem-container-title">
        <div className="problem-wrapper-title">
          <p className="problem-label-title">REVIEWS</p>
          <p className="small-tagline-title">お客様の声</p>
          <h2 className="main-heading-title">
            ご利用いただい<span className="highlight-title">たお客様の声</span>
          </h2>
          <p className="notice">実際の洗浄効果をご覧ください</p>
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-grid">

          <div className="review-card">
            <div className="card-top">
              <Image src="/images/Ellipse 43 (2).png" alt="User" className="avatar" width={60} height={60} />
              <div className="user-info">
                <strong>田中 様</strong>
                <span>東京都</span>
              </div>
              <div className="quote-icon"></div>
            </div>
            <hr />
            <p className="review-text">「すぐ来てくれて助かりました。対応も丁寧で、臭いが完全になくなりました。」</p>
            <div className="stars">★★★★★</div>
          </div>

          <div className="review-card">
            <div className="card-top">
              <Image src="/images/Ellipse 43 (1).png" alt="User" className="avatar" width={60} height={60} />
              <div className="user-info">
                <strong>佐藤 様</strong>
                <span>神奈川県</span>
              </div>
              <div className="quote-icon"></div>
            </div>
            <hr />
            <p className="review-text">「対応が丁寧で安心でした。問い合わせから施工までスムーズで、仕上がりも満足です。」</p>
            <div className="stars">★★★★★</div>
          </div>

          <div className="review-card">
            <div className="card-top">
              <Image src="/images/Ellipse 43.png" alt="User" className="avatar" width={60} height={60} />
              <div className="user-info">
                <strong>鈴木 様</strong>
                <span>千葉県</span>
              </div>
              <div className="quote-icon"></div>
            </div>
            <hr />
            <p className="review-text">「臭いが完全になくなりました。業者さんも丁寧で、また利用したいと思います。」</p>
            <div className="stars">★★★★★</div>
          </div>

        </div>
      </section>

      <section className="problem-container-title">
        <div className="problem-wrapper-title">
          <p className="problem-label-title">SERVICE AREA</p>
          <p className="small-tagline-title">対応エリア</p>
          <h2 className="main-heading-title">
            首都圏対応<span className="highlight-title">（順次全国展開中）</span>
          </h2>
          <p className="notice">お近くの提携業者をご案内します</p>
        </div>
      </section>

      <div className="pref-card-grid">
        <div className="pref-card" style={{backgroundImage: "linear-gradient(rgba(255, 208, 0, 0.274), rgba(255, 208, 0, 0.274)), url('/images/Rectangle 152.png')"}}>
          <div className="pref-card-content">
            <div className="pref-pin-icon"></div>
            <h2 className="pref-title">東京都</h2>
            <p className="pref-subtitle">23区・多摩地域</p>
          </div>
        </div>

        <div className="pref-card" style={{backgroundImage: "linear-gradient(rgba(255, 208, 0, 0.274), rgba(255, 208, 0, 0.274)), url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80')"}}>
          <div className="pref-card-content">
            <div className="pref-pin-icon"></div>
            <h2 className="pref-title">神奈川県</h2>
            <p className="pref-subtitle">横浜・川崎・相模原</p>
          </div>
        </div>

        <div className="pref-card" style={{backgroundImage: "linear-gradient(rgba(255, 208, 0, 0.274), rgba(255, 208, 0, 0.274)), url('https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80')"}}>
          <div className="pref-card-content">
            <div className="pref-pin-icon"></div>
            <h2 className="pref-title">埼玉県</h2>
            <p className="pref-subtitle">さいたま・川口・所沢</p>
          </div>
        </div>

        <div className="pref-card" style={{backgroundImage: "linear-gradient(rgba(255, 208, 0, 0.274), rgba(255, 208, 0, 0.274)), url('/images/Rectangle 152 (1).png')"}}>
          <div className="pref-card-content">
            <div className="pref-pin-icon"></div>
            <h2 className="pref-title">千葉県</h2>
            <p className="pref-subtitle">千葉・船橋・柏</p>
          </div>
        </div>
      </div>

      <section className="problem-container-title">
        <div className="problem-wrapper-title">
          <p className="problem-label-title">FAQ</p>
          <h2 className="main-heading-title">
            <span className="highlight-title">よくある質問</span>
          </h2>
        </div>
      </section>

      <div className="faq-container">
        <details className="faq-item">
          <summary>
            <div className="q-icon">Q</div>
            <span className="question-text">水は使いますか？</span>
            <svg className="arrow" viewBox="0 0 24 14"><path d="M2 2l10 10L22 2"/></svg>
          </summary>
          <div className="answer">
            お風呂場orベランダor玄関前などで水道をお借りします。
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <div className="q-icon">Q</div>
            <span className="question-text">どれくらい時間がかかりますか？</span>
            <svg className="arrow" viewBox="0 0 24 14"><path d="M2 2l10 10L22 2"/></svg>
          </summary>
          <div className="answer">
            通常、お申し込みから完了まで約1時間〜2時間ほどお時間をいただいております。作業内容によって前後する場合がございます。
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <div className="q-icon">Q</div>
            <span className="question-text">当日対応は可能ですか？</span>
            <svg className="arrow" viewBox="0 0 24 14"><path d="M2 2l10 10L22 2"/></svg>
          </summary>
          <div className="answer">
            はい、空き状況によりますが当日のお申し込みも受け付けております。お急ぎの場合はお電話にてお問い合わせください。
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <div className="q-icon">Q</div>
            <span className="question-text">追加料金は発生しますか？</span>
            <svg className="arrow" viewBox="0 0 24 14"><path d="M2 2l10 10L22 2"/></svg>
          </summary>
          <div className="answer">
            はい、空き状況によりますが当日のお申し込みも受け付けております。お急ぎの場合はお電話にてお問い合わせください。
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <div className="q-icon">Q</div>
            <span className="question-text">支払い方法は何がありますか？</span>
            <svg className="arrow" viewBox="0 0 24 14"><path d="M2 2l10 10L22 2"/></svg>
          </summary>
          <div className="answer">
            はい、空き状況によりますが当日のお申し込みも受け付けております。お急ぎの場合はお電話にてお問い合わせください。
          </div>
        </details>
      </div>

      <section className="contact-section" id="contact-right">
        <div className="contact-header">
          <p>CONTACT</p>
          <h2 style={{margin:0}}>お問い合わせ</h2>
          <h2 style={{marginTop:0}}><span className="highlight">無料お見積り・ご相談</span></h2>
          <p>お気軽にお問い合わせください</p>
        </div>

        <div className="contact-container">
          <div className="contact-left">
            <div className="info-card phone">
              <div className="icon-circle">
                <Image src="/images/Vector (5).png" alt="Phone Icon" width={36} height={36} />
              </div>
              <div className="card-text">
                <p style={{margin:0, fontSize:14}}>お電話でのお問い合わせ</p>
                <p className="phone-num">0120-000-000</p>
                <p style={{margin:0, fontSize:12, opacity:0.9}}>受付時間：9:00〜20:00（年中無休）</p>
              </div>
            </div>

            <a href="/line" className="info-card line info-card-line-link">
              <div className="icon-circle">
                <Image src="/images/SVG (18).png" alt="LINE Icon" width={36} height={36} />
              </div>
              <div className="card-text">
                <p style={{margin:0, fontSize:14, fontWeight:"bold"}}>LINEでのお問い合わせ</p>
                <p style={{margin:"5px 0 0 0", fontSize:12, opacity:0.9}}>LINEでもお気軽にご相談いただけます。<br />写真を送っていただくとスムーズです。</p>
              </div>
            </a>
          </div>

          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <Image src="/images/Link - ホーム.png" alt="エアコンクリーンナビ Logo" width={180} height={60} />
            </div>
            <p className="footer-tagline">
              首都圏を中心にプロのエアコン洗浄サービスを提供しています。
            </p>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-title">サービス</h3>
            <ul className="footer-list">
              <li><a href="#">壁掛けエアコン洗浄</a></li>
              <li><a href="#">お掃除機能付きエアコン洗浄</a></li>
              <li><a href="#">天井埋込型エアコン洗浄</a></li>
              <li><a href="#">防カビコート</a></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-title">対応エリア</h3>
            <ul className="footer-list">
              <li><a href="#">東京都</a></li>
              <li><a href="#">神奈川県</a></li>
              <li><a href="#">埼玉県</a></li>
              <li><a href="#">千葉県</a></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-title">会社情報</h3>
            <ul className="footer-list">
              <li><a href="#">会社概要</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
              <li><a href="#">特定商取引法に基づく表記</a></li>
              <li><a href="#">お問い合わせ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 クリーンエアー All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
