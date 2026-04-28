'use strict';

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const translations = {
  en: {
    page_title: 'Albert Dilanyan — Violinist',
    nav_home: 'Home', nav_bio: 'Bio', nav_news: 'News',
    nav_perf: 'Performances', nav_rec: 'Recordings', nav_contact: 'Contact',
    hero_subtitle: 'Violinist',
    quote_text: 'A violinist of rare gifts \u2014 technically dazzling and emotionally profound.',
    quote_source: '\u2014\u2009The Guardian',
    bio_title: 'Biography',
    bio_p1: 'Albert Dilanyan is a violinist of extraordinary sensitivity whose playing bridges the classical tradition with a deeply personal voice. Born into a musical family, he began his violin studies at the age of five and quickly distinguished himself through the purity of his tone and his instinctive musicianship.',
    bio_p2: 'He has performed as soloist with leading orchestras across Europe and the Americas, earning praise for interpretations that balance intellectual rigour with lyrical warmth. His chamber music partnerships have taken him to some of the world\u2019s most celebrated festivals, where audiences respond to his ability to listen and breathe with fellow musicians.',
    bio_p3: 'A committed pedagogue, Albert regularly gives masterclasses and workshops, believing that the transmission of musical knowledge is inseparable from performance. He plays a late-18th-century Italian violin and records for an internationally distributed classical label.',
    news_1_date: 'March 2026',    news_1_head: 'Carnegie Hall Debut Receives Standing Ovation',
    news_1_body: 'Critics hailed the performance as \u201ca revelation of technical mastery and profound musicality\u201d in the New York Times.',
    news_2_date: 'February 2026', news_2_head: 'New Recording Released on Deutsche Grammophon',
    news_2_body: 'The debut album featuring Bach Sonatas and Partitas is available on all major streaming platforms from 14\u00a0February.',
    news_3_date: 'January 2026',  news_3_head: 'European Tour Announced for Spring Season',
    news_3_body: 'Fourteen concert dates spanning Vienna, Berlin, Paris and London will feature the complete Beethoven violin sonatas.',
    read_more: 'Read more',
    month_may: 'MAY', month_jun: 'JUN', month_jul: 'JUL',
    tickets_info: 'Tickets\u00a0& Info',
    perf_1_title: 'Beethoven Violin Concerto',   perf_2_title: 'Brahms Sonatas Recital',
    perf_3_title: 'Sibelius Violin Concerto',    perf_4_title: 'Bach Partitas & Sonatas',
    perf_5_title: 'Tchaikovsky Violin Concerto', perf_6_title: 'Prokofiev Sonata No.\u00a01',
    perf_7_title: 'Mendelssohn Violin Concerto', perf_8_title: 'Bartók Violin Concerto No.\u00a02',
    rec_1_title: 'Bach: Sonatas & Partitas',
    rec_1_desc:  'A landmark traversal of Bach\u2019s complete works for solo violin, recorded over three sessions in Vienna.',
    rec_2_title: 'Beethoven: Complete Sonatas Vol.\u00a0I',
    rec_2_desc:  'The first instalment of a projected complete Beethoven violin sonata cycle, praised for its conversational intimacy.',
    rec_3_title: 'Sibelius & Prokofiev Concertos',
    rec_3_desc:  'Recorded live with the Berliner Philharmoniker, capturing the electrifying atmosphere of these debut performances.',
    rec_4_title: 'Brahms: Violin Sonatas',
    rec_4_desc:  'A deeply personal reading of the three Brahms sonatas, recorded in an intimate studio setting in Berlin.',
    contact_sub:  'For booking enquiries, press requests or general information, please use the form below.',
    form_name: 'Name',    ph_name: 'Your full name',
    form_email: 'Email',
    form_subject: 'Subject', ph_subject: 'Booking\u2002/\u2002Press\u2002/\u2002General',
    form_message: 'Message', ph_message: 'Your message\u2026',
    btn_send: 'Send Message', btn_sent: 'Sent',
    footer_copy: '\u00a9\u00a02026 Albert Dilanyan. All rights reserved.',
    nav_videos: 'Videos',
    videos_title: 'Watch & Listen',
    vid_1: 'Skoryk: Carpathian Rapsodia',
    vid_2: 'Tchaikovsky: Melody',
    vid_3: 'Khachaturian: Sabre Dance',
    vid_4: 'Khachaturian: Violin Concerto',
    vid_5: 'Wieniawski: Faust Fantasy',
    vid_6: 'Komitas: Krunk',
    videos_cta: 'Watch on YouTube',
    cookie_text:  'This website uses cookies to enhance your experience. <a href="#">Learn more</a>',
    cookie_agree: 'I agree',
  },

  ru: {
    page_title: '\u0410\u043b\u044c\u0431\u0435\u0440\u0442 \u0414\u0438\u043b\u0430\u043d\u044f\u043d \u2014 \u0421\u043a\u0440\u0438\u043f\u0430\u0447',
    nav_home: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f', nav_bio: '\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f',
    nav_news: '\u041d\u043e\u0432\u043e\u0441\u0442\u0438', nav_perf: '\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b',
    nav_rec:  '\u0417\u0430\u043f\u0438\u0441\u0438',       nav_contact: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442',
    hero_subtitle: '\u0421\u043a\u0440\u0438\u043f\u0430\u0447',
    quote_text: '\u0421\u043a\u0440\u0438\u043f\u0430\u0447 \u0440\u0435\u0434\u043a\u043e\u0433\u043e \u0434\u0430\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u2014 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u0431\u043b\u0435\u0441\u0442\u044f\u0449\u0438\u0439 \u0438 \u044d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0439.',
    quote_source: '\u2014\u2009The Guardian',
    bio_title: '\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f',
    bio_p1: '\u0410\u043b\u044c\u0431\u0435\u0440\u0442 \u0414\u0438\u043b\u0430\u043d\u044f\u043d \u2014 \u0441\u043a\u0440\u0438\u043f\u0430\u0447 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0447\u0443\u0442\u043a\u043e\u0441\u0442\u0438, \u0447\u044c\u044f \u0438\u0433\u0440\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u044e \u0441 \u0433\u043b\u0443\u0431\u043e\u043a\u043e \u043b\u0438\u0447\u043d\u044b\u043c \u0433\u043e\u043b\u043e\u0441\u043e\u043c. \u0420\u043e\u0434\u0438\u0432\u0448\u0438\u0439\u0441\u044f \u0432 \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u043c\u044c\u0435, \u043e\u043d \u043d\u0430\u0447\u0430\u043b \u0437\u0430\u043d\u044f\u0442\u0438\u044f \u043d\u0430 \u0441\u043a\u0440\u0438\u043f\u043a\u0435 \u0432 \u043f\u044f\u0442\u044c \u043b\u0435\u0442 \u0438 \u0431\u044b\u0441\u0442\u0440\u043e \u0432\u044b\u0434\u0435\u043b\u0438\u043b\u0441\u044f \u0447\u0438\u0441\u0442\u043e\u0442\u043e\u0439 \u0437\u0432\u0443\u043a\u0430 \u0438 \u043f\u0440\u0438\u0440\u043e\u0434\u043d\u044b\u043c \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0447\u0443\u0442\u044c\u0451\u043c.',
    bio_p2: '\u041e\u043d \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u043b \u043a\u0430\u043a \u0441\u043e\u043b\u0438\u0441\u0442 \u0441 \u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438 \u043e\u0440\u043a\u0435\u0441\u0442\u0440\u0430\u043c\u0438 \u0415\u0432\u0440\u043e\u043f\u044b \u0438 \u0410\u043c\u0435\u0440\u0438\u043a\u0438, \u043f\u043e\u043b\u0443\u0447\u0430\u044f \u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u043e\u0446\u0435\u043d\u043a\u0438 \u0437\u0430 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438, \u0441\u043e\u0447\u0435\u0442\u0430\u044e\u0449\u0438\u0435 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u0433\u043e\u0441\u0442\u044c \u0441 \u043b\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0442\u0435\u043f\u043b\u043e\u0442\u043e\u0439. \u041a\u0430\u043c\u0435\u0440\u043d\u043e\u0435 \u043c\u0443\u0437\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u0432\u0435\u043b\u043e \u0435\u0433\u043e \u043d\u0430 \u0441\u0430\u043c\u044b\u0435 \u043f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043b\u0438 \u043c\u0438\u0440\u0430, \u0433\u0434\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0446\u0435\u043d\u0438\u0442 \u0435\u0433\u043e \u0443\u043c\u0435\u043d\u0438\u0435 \u0441\u043b\u0443\u0448\u0430\u0442\u044c \u0438 \u0434\u044b\u0448\u0430\u0442\u044c \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0430\u043c\u0438 \u043f\u043e \u0441\u0446\u0435\u043d\u0435.',
    bio_p3: '\u0423\u0431\u0435\u0436\u0434\u0451\u043d\u043d\u044b\u0439 \u043f\u0435\u0434\u0430\u0433\u043e\u0433, \u0410\u043b\u044c\u0431\u0435\u0440\u0442 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442 \u043c\u0430\u0441\u0442\u0435\u0440-\u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u0441\u0435\u043c\u0438\u043d\u0430\u0440\u044b, \u043f\u043e\u043b\u0430\u0433\u0430\u044f, \u0447\u0442\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0437\u043d\u0430\u043d\u0438\u0439 \u043d\u0435\u043e\u0442\u0434\u0435\u043b\u0438\u043c\u0430 \u043e\u0442 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430. \u041e\u043d \u0438\u0433\u0440\u0430\u0435\u0442 \u043d\u0430 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u043e\u0439 \u0441\u043a\u0440\u0438\u043f\u043a\u0435 \u043a\u043e\u043d\u0446\u0430 XVIII \u0432\u0435\u043a\u0430 \u0438 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0435\u0439\u0431\u043b\u0430.',
    news_1_date: '\u041c\u0430\u0440\u0442 2026',    news_1_head: '\u0414\u0435\u0431\u044e\u0442 \u0432 \u041a\u0430\u0440\u043d\u0435\u0433\u0438-\u0425\u043e\u043b\u043b \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0441\u044f \u043e\u0432\u0430\u0446\u0438\u0435\u0439 \u0441\u0442\u043e\u044f',
    news_1_body: '\u041a\u0440\u0438\u0442\u0438\u043a\u0438 New York Times \u043d\u0430\u0437\u0432\u0430\u043b\u0438 \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u00ab\u043e\u0442\u043a\u0440\u043e\u0432\u0435\u043d\u0438\u0435\u043c \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0438 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0439 \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438\u00bb.',
    news_2_date: '\u0424\u0435\u0432\u0440\u0430\u043b\u044c 2026', news_2_head: '\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0432\u044b\u0448\u043b\u0430 \u043d\u0430 Deutsche Grammophon',
    news_2_body: '\u0414\u0435\u0431\u044e\u0442\u043d\u044b\u0439 \u0430\u043b\u044c\u0431\u043e\u043c \u0441 \u0421\u043e\u043d\u0430\u0442\u0430\u043c\u0438 \u0438 \u043f\u0430\u0440\u0442\u0438\u0442\u0430\u043c\u0438 \u0411\u0430\u0445\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043d\u0430 \u0432\u0441\u0435\u0445 \u043a\u0440\u0443\u043f\u043d\u044b\u0445 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u043e\u0432\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445 \u0441 14\u00a0\u0444\u0435\u0432\u0440\u0430\u043b\u044f.',
    news_3_date: '\u042f\u043d\u0432\u0430\u0440\u044c 2026',  news_3_head: '\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043e \u0435\u0432\u0440\u043e\u043f\u0435\u0439\u0441\u043a\u043e\u0435 \u0442\u0443\u0440\u043d\u0435 \u043d\u0430 \u0432\u0435\u0441\u0435\u043d\u043d\u0438\u0439 \u0441\u0435\u0437\u043e\u043d',
    news_3_body: '\u0427\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u044c \u043a\u043e\u043d\u0446\u0435\u0440\u0442\u043d\u044b\u0445 \u0434\u0430\u0442 \u0432 \u0412\u0435\u043d\u0435, \u0411\u0435\u0440\u043b\u0438\u043d\u0435, \u041f\u0430\u0440\u0438\u0436\u0435 \u0438 \u041b\u043e\u043d\u0434\u043e\u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d\u044b \u043f\u043e\u043b\u043d\u043e\u043c\u0443 \u0446\u0438\u043a\u043b\u0443 \u0441\u043a\u0440\u0438\u043f\u0438\u0447\u043d\u044b\u0445 \u0441\u043e\u043d\u0430\u0442 \u0411\u0435\u0442\u0445\u043e\u0432\u0435\u043d\u0430.',
    read_more: '\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435',
    month_may: '\u041c\u0410\u0419', month_jun: '\u0418\u042e\u041d', month_jul: '\u0418\u042e\u041b',
    tickets_info: '\u0411\u0438\u043b\u0435\u0442\u044b\u00a0\u0438 \u0438\u043d\u0444\u043e',
    perf_1_title: '\u0421\u043a\u0440\u0438\u043f\u0438\u0447\u043d\u044b\u0439 \u043a\u043e\u043d\u0446\u0435\u0440\u0442 \u0411\u0435\u0442\u0445\u043e\u0432\u0435\u043d\u0430',
    perf_2_title: '\u0420\u0435\u0446\u0438\u0442\u0430\u043b \u0441\u043e\u043d\u0430\u0442 \u0411\u0440\u0430\u043c\u0441\u0430',
    perf_3_title: '\u0421\u043a\u0440\u0438\u043f\u0438\u0447\u043d\u044b\u0439 \u043a\u043e\u043d\u0446\u0435\u0440\u0442 \u0421\u0438\u0431\u0435\u043b\u0438\u0443\u0441\u0430',
    perf_4_title: '\u041f\u0430\u0440\u0442\u0438\u0442\u044b \u0438 \u0441\u043e\u043d\u0430\u0442\u044b \u0411\u0430\u0445\u0430',
    perf_5_title: '\u0421\u043a\u0440\u0438\u043f\u0438\u0447\u043d\u044b\u0439 \u043a\u043e\u043d\u0446\u0435\u0440\u0442 \u0427\u0430\u0439\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e',
    perf_6_title: '\u0421\u043e\u043d\u0430\u0442\u0430\u00a0\u2116\u00a01 \u041f\u0440\u043e\u043a\u043e\u0444\u044c\u0435\u0432\u0430',
    perf_7_title: '\u0421\u043a\u0440\u0438\u043f\u0438\u0447\u043d\u044b\u0439 \u043a\u043e\u043d\u0446\u0435\u0440\u0442 \u041c\u0435\u043d\u0434\u0435\u043b\u044c\u0441\u043e\u043d\u0430',
    perf_8_title: '\u0421\u043a\u0440\u0438\u043f\u0438\u0447\u043d\u044b\u0439 \u043a\u043e\u043d\u0446\u0435\u0440\u0442 \u0411\u0430\u0440\u0442\u043e\u043a\u0430\u00a0\u2116\u00a02',
    rec_1_title: '\u0411\u0430\u0445: \u0421\u043e\u043d\u0430\u0442\u044b \u0438 \u043f\u0430\u0440\u0442\u0438\u0442\u044b',
    rec_1_desc:  '\u042d\u043f\u043e\u0445\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u043e\u0447\u0442\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u0411\u0430\u0445\u0430 \u0434\u043b\u044f \u0441\u043e\u043b\u044c\u043d\u043e\u0439 \u0441\u043a\u0440\u0438\u043f\u043a\u0438, \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0437\u0430 \u0442\u0440\u0438 \u0441\u0435\u0441\u0441\u0438\u0438 \u0432 \u0412\u0435\u043d\u0435.',
    rec_2_title: '\u0411\u0435\u0442\u0445\u043e\u0432\u0435\u043d: \u041f\u043e\u043b\u043d\u044b\u0439 \u0446\u0438\u043a\u043b \u0441\u043e\u043d\u0430\u0442,\u00a0\u0442.\u00a0I',
    rec_2_desc:  '\u041f\u0435\u0440\u0432\u044b\u0439 \u0442\u043e\u043c \u0437\u0430\u0434\u0443\u043c\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430 \u0441\u043a\u0440\u0438\u043f\u0438\u0447\u043d\u044b\u0445 \u0441\u043e\u043d\u0430\u0442 \u0411\u0435\u0442\u0445\u043e\u0432\u0435\u043d\u0430.',
    rec_3_title: '\u041a\u043e\u043d\u0446\u0435\u0440\u0442\u044b \u0421\u0438\u0431\u0435\u043b\u0438\u0443\u0441\u0430 \u0438 \u041f\u0440\u043e\u043a\u043e\u0444\u044c\u0435\u0432\u0430',
    rec_3_desc:  '\u0416\u0438\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0441 \u0411\u0435\u0440\u043b\u0438\u043d\u0441\u043a\u0438\u043c \u0444\u0438\u043b\u0430\u0440\u043c\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043e\u0440\u043a\u0435\u0441\u0442\u0440\u043e\u043c.',
    rec_4_title: '\u0411\u0440\u0430\u043c\u0441: \u0421\u043a\u0440\u0438\u043f\u0438\u0447\u043d\u044b\u0435 \u0441\u043e\u043d\u0430\u0442\u044b',
    rec_4_desc:  '\u0413\u043b\u0443\u0431\u043e\u043a\u043e \u043b\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u043e\u0447\u0442\u0435\u043d\u0438\u0435 \u0442\u0440\u0451\u0445 \u0441\u043e\u043d\u0430\u0442 \u0411\u0440\u0430\u043c\u0441\u0430, \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0432 \u043a\u0430\u043c\u0435\u0440\u043d\u043e\u0439 \u0441\u0442\u0443\u0434\u0438\u0438 \u0432 \u0411\u0435\u0440\u043b\u0438\u043d\u0435.',
    contact_sub: '\u041f\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c \u043f\u0440\u0435\u0441\u0441\u044b \u0438\u043b\u0438 \u043e\u0431\u0449\u0438\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0444\u043e\u0440\u043c\u043e\u0439 \u043d\u0438\u0436\u0435.',
    form_name: '\u0418\u043c\u044f',     ph_name: '\u0412\u0430\u0448\u0435 \u043f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f',
    form_email: '\u042d\u043b. \u043f\u043e\u0447\u0442\u0430',
    form_subject: '\u0422\u0435\u043c\u0430', ph_subject: '\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u2002/\u2002\u041f\u0440\u0435\u0441\u0441\u0430\u2002/\u2002\u041e\u0431\u0449\u0435\u0435',
    form_message: '\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435', ph_message: '\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\u2026',
    btn_send: '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c', btn_sent: '\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e',
    footer_copy: '\u00a9\u00a02026 \u0410\u043b\u044c\u0431\u0435\u0440\u0442 \u0414\u0438\u043b\u0430\u043d\u044f\u043d. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.',
    nav_videos: 'Видео',
    videos_title: 'Смотреть и слушать',
    vid_1: 'Скорик: Карпатская рапсодия',
    vid_2: 'Чайковский: Мелодия',
    vid_3: 'Хачатурян: Танец с саблями',
    vid_4: 'Хачатурян: Скрипичный концерт',
    vid_5: 'Венявский: Фантазия на темы «Фауста»',
    vid_6: 'Комитас: Крунк',
    videos_cta: 'Смотреть на YouTube',
    cookie_text:  '\u042d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0444\u0430\u0439\u043b\u044b cookie. <a href="#">\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435</a>',
    cookie_agree: '\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d',
  },

  fi: {
    page_title: 'Albert Dilanyan \u2014 Viulisti',
    nav_home: 'Etusivu', nav_bio: 'Biografia', nav_news: 'Uutiset',
    nav_perf: 'Konsertit', nav_rec: '\u00c4\u00e4nitteet', nav_contact: 'Yhteystiedot',
    hero_subtitle: 'Viulisti',
    quote_text: 'Harvinaislaatuinen viulisti \u2014 teknisesti h\u00e4ik\u00e4isev\u00e4 ja emotionaalisesti syv\u00e4llinen.',
    quote_source: '\u2014\u2009The Guardian',
    bio_title: 'El\u00e4m\u00e4kerta',
    bio_p1: 'Albert Dilanyan on poikkeuksellisen herk\u00e4n viulisti, jonka soitossa klassinen perinne kohtaa syv\u00e4sti omakohtaisen \u00e4\u00e4nen. Musiikilliseen perheeseen syntynyt Albert aloitti viuluopintonsa viisivuotiaana ja erottui nopeasti soittonsa puhtaudella ja luontaisella musikaalisuudellaan.',
    bio_p2: 'H\u00e4n on esiintynyt solistina johtavien orkestereiden kanssa ymp\u00e4ri Eurooppaa ja Amerikkaa saaden kiitosta tulkinnoistaan, jotka tasapainottavat \u00e4lyllist\u00e4 tiukkuutta lyyrisen l\u00e4mm\u00f6n kanssa. Kamarimusiikkipartneruudet ovat vieneet h\u00e4net maailman juhlatuimmille festivaaleille.',
    bio_p3: 'Sitoutunut pedagogi, Albert pit\u00e4\u00e4 s\u00e4\u00e4nn\u00f6llisesti mestarikursseja ja ty\u00f6pajoja uskoen, ett\u00e4 musiikillisen tiedon siirt\u00e4minen on erottamaton osa esitt\u00e4mist\u00e4. H\u00e4n soittaa 1700-luvun lopun italialaista viulua.',
    news_1_date: 'Maaliskuu 2026',  news_1_head: 'Carnegie Hallin debyytti sai seisovan suosionosoituksen',
    news_1_body: 'New York Times ylist\u00e4\u00e4 esityst\u00e4 \u201dteknisen taidon ja sy v\u00e4n musikaalisuuden ilmestyksen\u00e4\u201d.',
    news_2_date: 'Helmikuu 2026',   news_2_head: 'Uusi \u00e4\u00e4nite julkaistu Deutsche Grammophonilla',
    news_2_body: 'Debyyttialbumi Bachin sonaateilla ja partitailla on saatavilla kaikilla suurimmilla suoratoistoalustoilla 14.\u00a0helmikuuta alkaen.',
    news_3_date: 'Tammikuu 2026',   news_3_head: 'Eurooppakiertue julkistettu kev\u00e4\u00e4lle',
    news_3_body: 'Nelj\u00e4toista konserttip\u00e4iv\u00e4\u00e4 Wieniss\u00e4, Berliiniss\u00e4, Pariisissa ja Lontoossa esittelee Beethovenin t\u00e4ydelliset viulusonaatit.',
    read_more: 'Lue lis\u00e4\u00e4',
    month_may: 'TOUKO', month_jun: 'KES\u00c4', month_jul: 'HEIN\u00c4',
    tickets_info: 'Liput\u00a0& tiedot',
    perf_1_title: 'Beethovenin viulukonsertto',   perf_2_title: 'Brahms-sonaattiresitaali',
    perf_3_title: 'Sibeliuksen viulukonsertto',   perf_4_title: 'Bachin partitat ja sonaatit',
    perf_5_title: 'T\u0161aikovskin viulukonsertto', perf_6_title: 'Prokofjevin sonaatti nro\u00a01',
    perf_7_title: 'Mendelssohnin viulukonsertto', perf_8_title: 'Bart\u00f3kin viulukonsertto nro\u00a02',
    rec_1_title: 'Bach: Sonaatit ja partitat',
    rec_1_desc:  'Merkkiteos Bachin kaikista viulusoolo-teoksista, \u00e4\u00e4nitetty kolmessa sessiossa Wieniss\u00e4.',
    rec_2_title: 'Beethoven: T\u00e4ydelliset sonaatit osa\u00a0I',
    rec_2_desc:  'Ensimm\u00e4inen osa suunnitellusta t\u00e4ydellisest\u00e4 Beethovenin viulusonaattisykklist\u00e4.',
    rec_3_title: 'Sibeliuksen ja Prokofjevin konsertot',
    rec_3_desc:  '\u00c4\u00e4nitetty liven\u00e4 Berliinin filharmonikkojen kanssa.',
    rec_4_title: 'Brahms: Viulusonaatit',
    rec_4_desc:  'Syv\u00e4sti henkil\u00f6kohtainen tulkinta Brahmsin kolmesta sonaatista, \u00e4\u00e4nitetty Berliiniss\u00e4.',
    contact_sub: 'Varaus- ja lehdist\u00f6kyselyihin tai yleist\u00e4 tietoa varten k\u00e4yt\u00e4 alla olevaa lomaketta.',
    form_name: 'Nimi',      ph_name: 'Koko nimesi',
    form_email: 'S\u00e4hk\u00f6posti',
    form_subject: 'Aihe',   ph_subject: 'Varaus\u2002/\u2002Lehdist\u00f6\u2002/\u2002Yleinen',
    form_message: 'Viesti', ph_message: 'Viestisi\u2026',
    btn_send: 'L\u00e4het\u00e4 viesti', btn_sent: 'L\u00e4hetetty',
    footer_copy: '\u00a9\u00a02026 Albert Dilanyan. Kaikki oikeudet pid\u00e4tet\u00e4\u00e4n.',
    nav_videos: 'Videot',
    videos_title: 'Katso & Kuuntele',
    vid_1: 'Skoryk: Karpaattien rapsodia',
    vid_2: 'Tšaikovski: Melodia',
    vid_3: 'Hatsaturjan: Sapelitanssi',
    vid_4: 'Hatsaturjan: Viulukonsertto',
    vid_5: 'Wieniawski: Faust-fantasia',
    vid_6: 'Komitas: Krunk',
    videos_cta: 'Katso YouTubessa',
    cookie_text:  'T\u00e4m\u00e4 sivusto k\u00e4ytt\u00e4\u00e4 ev\u00e4steit\u00e4. <a href="#">Lue lis\u00e4\u00e4</a>',
    cookie_agree: 'Hyv\u00e4ksyn',
  },
};

// ─── I18N ────────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t.page_title;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (t[el.dataset.i18n] !== undefined) el.textContent = t[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    if (t[el.dataset.i18nHtml] !== undefined) el.innerHTML = t[el.dataset.i18nHtml];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    if (t[el.dataset.i18nPlaceholder] !== undefined) el.placeholder = t[el.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

function switchLanguage(lang) {
  if (lang === currentLang) return;
  document.body.classList.add('lang-transitioning');
  setTimeout(() => {
    applyLanguage(lang);
    document.body.classList.remove('lang-transitioning');
    document.body.classList.add('lang-revealed');
    setTimeout(() => document.body.classList.remove('lang-revealed'), 450);
  }, 190);
}

document.querySelectorAll('.lang-btn').forEach(b =>
  b.addEventListener('click', () => switchLanguage(b.dataset.lang))
);
applyLanguage(currentLang);

// ─── PAGE LOADER ─────────────────────────────────────────────────────────────
const pageLoader = document.getElementById('pageLoader');
window.addEventListener('load', () => {
  setTimeout(() => {
    pageLoader.classList.add('done');
    document.body.classList.add('loaded');
    setTimeout(() => pageLoader.remove(), 600);
  }, 950);
});

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Active section highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
    }
  });
}, { rootMargin: `-${78}px 0px -55% 0px`, threshold: 0 })
.observe && sections.forEach(s =>
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: `-78px 0px -55% 0px`, threshold: 0 }).observe(s)
);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const t = document.querySelector(link.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: 'smooth' });
    if (mobileMenu.classList.contains('open')) closeMobileMenu();
  });
});

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMobileMenu()  { mobileMenu.classList.add('open'); hamburger.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMobileMenu() { mobileMenu.classList.remove('open'); hamburger.classList.remove('open'); document.body.style.overflow = ''; }

hamburger.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);

// ─── HERO PARALLAX ───────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('.hero-slide').forEach(s => {
    s.style.transform = `translateY(${y * 0.28}px)`;
  });
}, { passive: true });

// ─── HERO SLIDER ─────────────────────────────────────────────────────────────
const slides = document.querySelectorAll('.hero-slide');
let cur = 0, timer;
function goTo(i) {
  slides[cur].classList.remove('active');
  cur = (i + slides.length) % slides.length;
  slides[cur].classList.add('active');
}
function startSlider() { timer = setInterval(() => goTo(cur + 1), 6000); }
document.getElementById('heroPrev').addEventListener('click', () => { clearInterval(timer); goTo(cur - 1); startSlider(); });
document.getElementById('heroNext').addEventListener('click', () => { clearInterval(timer); goTo(cur + 1); startSlider(); });
if (slides.length > 0) startSlider();

// ─── SCROLL ANIMATIONS ───────────────────────────────────────────────────────
const animGroups = [
  { sel: '.section-title',        stagger: 0,    base: 0 },
  { sel: '.section-label',        stagger: 0,    base: 0 },
  { sel: '.press-mark',           stagger: 0,    base: 0 },
  { sel: '.press-quote',          stagger: 0,    base: 0.1 },
  { sel: '.press-source',         stagger: 0,    base: 0.22 },
  { sel: '.bio-body',             stagger: 0.1,  base: 0.08 },
  { sel: '.bio-portrait',         stagger: 0,    base: 0.18 },
  { sel: '.news-card',            stagger: 0.1,  base: 0 },
  { sel: '.perf-cell',            stagger: 0.05, base: 0 },
  { sel: '.album-card',           stagger: 0.09, base: 0 },
  { sel: '.recordings-portrait',  stagger: 0,    base: 0.12 },
  { sel: '.video-item',           stagger: 0.08, base: 0 },
  { sel: '.contact-sub',          stagger: 0,    base: 0.05 },
  { sel: '.form-row',             stagger: 0,    base: 0.08 },
  { sel: '.form-group',           stagger: 0.06, base: 0.08 },
  { sel: '.submit-btn',           stagger: 0,    base: 0.3 },
];

animGroups.forEach(({ sel, stagger, base }) => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('anim');
    el.style.transitionDelay = `${(base + i * stagger).toFixed(2)}s`;
  });
});

new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
  });
}, { rootMargin: '-40px 0px -6% 0px', threshold: 0.07 })
.observe && document.querySelectorAll('.anim').forEach(el =>
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
    });
  }, { rootMargin: '-40px 0px -6% 0px', threshold: 0.07 }).observe(el)
);

// ─── COOKIE ──────────────────────────────────────────────────────────────────
const cookieBanner = document.getElementById('cookieBanner');
if (localStorage.getItem('cookieAccepted')) cookieBanner.remove();
document.getElementById('cookieAccept').addEventListener('click', () => {
  localStorage.setItem('cookieAccepted', '1');
  cookieBanner.classList.add('hidden');
});

// ─── VIDEO CLICK-TO-PLAY ─────────────────────────────────────────────────────
document.querySelectorAll('.video-item').forEach(item => {
  const btn  = item.querySelector('.video-play-btn');
  const wrap = item.querySelector('.video-thumb-wrap');
  btn.addEventListener('click', () => {
    const id = item.dataset.videoId;
    wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="${item.querySelector('.video-title').textContent}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  });
});

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn  = e.target.querySelector('.submit-btn');
  const text = btn.querySelector('.btn-text');
  const arrow = btn.querySelector('.btn-arrow');
  text.textContent = translations[currentLang].btn_sent;
  arrow.textContent = '✓';
  btn.style.borderColor = 'var(--gold)';
  setTimeout(() => {
    text.textContent = translations[currentLang].btn_send;
    arrow.textContent = '→';
    btn.style.borderColor = '';
    e.target.reset();
  }, 3500);
});
