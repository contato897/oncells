import { useState, useCallback } from "react";

const B = {
  dk:"#32291b",cr:"#f6e7c1",tp:"#bfa58a",go:"#d8ba82",
  br:"#8e735d",wh:"#fdf8f0",pe:"#ff8a00",lo:"#6a59f5",
  be:"#c70000",he:"#009939",wo:"#ff3c89",al:"#e53e3e",
  taupe:"#bfa58a",gold:"#d8ba82",dark:"#32291b",cream:"#f6e7c1",
  heal:"#009939",long:"#6a59f5",beau:"#c70000",perf:"#ff8a00",wom:"#ff3c89",
};

/* ── FILOSOFIA ── */
const FILOSOFIA=[
  {n:"01",t:"EDUCAR",d:"O cliente aprende o ingrediente, o mecanismo de ação e por que importa para o seu corpo. Não é marketing — é ciência acessível.",i:"🧬",c:B.he,a:"Blog, Reels da Dra., Carrosséis técnicos"},
  {n:"02",t:"CONFIAR",d:"Ao entender o mecanismo, o cliente confia na marca. Ele não compra por impulso — compra por convicção. Confiança não se compra com desconto.",i:"🤝",c:B.lo,a:"Transparência de fórmula, provas visuais, laudos, comparações honestas"},
  {n:"03",t:"EXPERIMENTAR",d:"A primeira compra é guiada pela educação. O produto entrega o que a ciência prometeu. O resultado reforça a confiança inicial.",i:"💊",c:B.go,a:"Kit de entrada, protocolo 21 dias, unboxing educativo, guia impresso"},
  {n:"04",t:"FIDELIZAR",d:"Cliente que sabe POR QUÊ está tomando não para. A reposição é racional, não emocional. LTV alto. Ele indica para quem confia.",i:"♾️",c:B.wo,a:"Assinatura, clube VIP, comunidade WhatsApp, relatório de progresso"},
];

/* ── PRODUTOS ── */
const PRODUTOS={
  Health:{cor:B.he,icon:"🌿",items:["Vinagre de Maçã Gummy","Ômega 3 Vegetal","Magnésio Dimalato","Cellshot"]},
  Woman:{cor:B.wo,icon:"🌸",items:["Aura Woman","Flex & Care","Gaba Equilibrium","Bioserin"]},
  Longevity:{cor:B.lo,icon:"🔬",items:["Ômega 3 Vegetal","Coenzima Q10","Magnésio Dimalato","Melatonina Gummy"]},
  Performance:{cor:B.pe,icon:"⚡",items:["Creatina Gummy","Celeris","Cellshot"]},
  Beauty:{cor:B.be,icon:"✨",items:["Aura Woman","Ômega 3 Vegetal","Vinagre de Maçã Gummy"]},
};

/* ── BRAND KIT ── */
const BRAND={
  fortes:[
    {t:"Ícone Celular Distintivo",d:"O símbolo de células em disposição circular é único no mercado nutracêutico brasileiro. Memorável, científico e visualmente diferenciado. Ativo de marca valioso — proteja com registro.",n:"MANTENHA E VALORIZE"},
    {t:"Sistema de Cores por Linha",d:"Performance laranja, Longevity roxo, Health verde, Beauty vermelho, Woman rosa. Arquitetura de portfólio clara que facilita decisão de compra e guia design de embalagem.",n:"SISTEMA BEM CONSTRUÍDO"},
    {t:"Paleta Principal Premium",d:"Escuro orgânico (#32291b) com creme quente (#f6e7c1) e dourado (#d8ba82) transmite premium acessível. Não é farmácia genérica, não é luxo inacessível.",n:"POSICIONAMENTO CORRETO"},
    {t:"Tagline com Alma",d:"'A verdadeira beleza vem de dentro' é ao mesmo tempo literal (nutrição celular) e emocional. Conecta ciência com autocuidado. Use como âncora em todo conteúdo.",n:"USE EM TODO CONTEÚDO"},
    {t:"Hierarquia de Taglines",d:"Três taglines (Nutrição Celular, Nutraceuticos, Beleza Ativada) permitem flexibilidade por contexto: técnico, científico ou aspiracional.",n:"FLEXIBILIDADE INTELIGENTE"},
  ],
  lacunas:[
    {t:"🚨 CRÍTICO — Tom de Voz não documentado",u:"PRIORIDADE MÁXIMA",a:"Criar Guia de Tom de Voz: vocabulário aprovado, expressões proibidas, nível de formalidade por canal. A escritora deve liderar com validação dos fundadores."},
    {t:"⚠️ ALTO — League Spartan no Rebranding",u:"ALTA PRIORIDADE",a:"Comunicar a todos: League Spartan está CANCELADA. Sistema oficial = Playfair Display (títulos) + Montserrat (corpo). Remover documento de circulação."},
    {t:"⚠️ ALTO — Templates Sociais Ausentes",u:"ALTA PRIORIDADE",a:"Criar 6 templates base no Canva: Stories, Feed quadrado, retrato, destaque, carrossel, capa live. Com templates, cada post leva 15min."},
    {t:"⚠️ ALTO — Fotografia sem DO's e DON'Ts",u:"ALTA PRIORIDADE",a:"Moodboard com 6 aprovados + 6 reprovados. Temperatura 4500K–5500K, luz natural prioritária, sem filtros saturados."},
    {t:"⚠️ MÉDIO — Cores em Pantone/CMYK ausentes",u:"MÉDIA PRIORIDADE",a:"Para embalagens e materiais físicos: Pantone C, CMYK e RGB documentados lado a lado para cada cor principal."},
    {t:"⚠️ MÉDIO — Motion Kit não definido",u:"MÉDIA PRIORIDADE",a:"Criar: logo reveal (2s), transição de tela (0.5s), assinatura final de vídeo (3s). Definir música de marca para lives."},
  ],
  rec:[
    {n:"01",t:"Comunicar Tipografia Oficial",p:"Esta semana",c:B.be,d:"Playfair Display + Montserrat para todos. League Spartan = erro cancelado. E-mail formal para escritora, videomaker, agência e parceiros."},
    {n:"02",t:"Guia de Tom de Voz",p:"2 semanas",c:B.pe,d:"A escritora lidera. É o DNA da marca em palavras — tão importante quanto o logo. Sem isso, cada post soa diferente."},
    {n:"03",t:"Templates de Redes Sociais",p:"2–3 semanas",c:B.he,d:"6 templates base no Canva. Com templates, produção de conteúdo cai de 2h para 15min por post."},
    {n:"04",t:"Guia Fotográfico",p:"3 semanas",c:B.lo,d:"1 página A4 com moodboard. Videomaker usa como briefing de cada gravação."},
    {n:"05",t:"Motion Kit",p:"1 mês",c:B.wo,d:"Logo reveal + transição + assinatura final. 3 assets. Base para todas as produções audiovisuais."},
    {n:"06",t:"Brand Bible Completa",p:"2 meses",c:B.go,d:"Documento único: visual + voz + fotografia + motion + templates. Onboarding de qualquer novo colaborador."},
  ],
};

/* ── SEMANAS ── */
const SEMANAS=[
  {n:1,tema:"DETOX & ENERGIA",c:B.he,e:"🌿",dor:"Inchaço, cansaço, sono ruim",prods:["Vinagre de Maçã Gummy","Melatonina Gummy","Cellshot"],
   dias:[
    {d:"SEG",t:"BLOG SEO",ti:"Ressaca do verão? 3 passos para desinchar em 24h",g:"SEO alto volume",r:"Escritora"},
    {d:"TER",t:"REEL TREND",ti:"POV: Troquei o café das 14h por Cellshot e voltei a ser humano",g:"Trend identificação",r:"Personal + Videomaker"},
    {d:"QUA",t:"CARROSSEL",ti:"Por que você acorda cansado? [Cortisol → Melatonina → Solução]",g:"Salvar + Compartilhar",r:"Escritora"},
    {d:"QUI",t:"REEL DRA.",ti:"Mito x Verdade: 'Vinagre corrói os dentes?' — mostramos o estudo",g:"Autoridade científica",r:"Dra. + Videomaker"},
    {d:"SEX",t:"STORIES",ti:"Enquete de energia + oferta relâmpago para quem votar baixo",g:"Engajamento + conversão",r:"Escritora"},
    {d:"SAB",t:"UGC",ti:"Parceiro: rotina matinal com Vinagre Gummy (resultado 20 dias)",g:"Prova social real",r:"Parceiro/Influencer"},
    {d:"DOM",t:"COMUNIDADE",ti:"Reposta melhor conteúdo da semana + agradece à comunidade",g:"Humanização da marca",r:"Time"},
  ]},
  {n:2,tema:"SEMANA DA MULHER",c:B.wo,e:"🌸",dor:"TPM, pele sem viço, sobrecarga feminina",prods:["Aura Woman","Flex & Care","Ômega 3 Vegetal"],
   dias:[
    {d:"SEG",t:"BLOG SEO",ti:"Borragem vs Prímula: qual o melhor óleo para a saúde da mulher?",g:"SEO: suplemento TPM",r:"Escritora"},
    {d:"TER",t:"REEL DRA.",ti:"O que ninguém te conta sobre TPM e inflamação (com estudo PubMed)",g:"Polêmica + alcance orgânico",r:"Dra. + Videomaker"},
    {d:"QUA",t:"FOTO HERO",ti:"Aura Woman na penteadeira — 'seu skincare mais importante não é creme'",g:"Desejo + branding aspiracional",r:"Videomaker"},
    {d:"QUI",t:"UGC GRWM",ti:"Influencer se arrumando e tomando Aura Woman antes da make",g:"Identificação feminina",r:"Influencer"},
    {d:"SEX",t:"REEL ASMR",ti:"ASMR: abrindo o Aura Woman — cápsula dourada contra a luz",g:"Retenção visual 90%+",r:"Videomaker"},
    {d:"SAB",t:"CARROSSEL",ti:"3 kits femininos: Kit Glow / Kit Zen / Kit Energia",g:"Venda direta + data especial",r:"Escritora"},
    {d:"DOM",t:"MANIFESTO",ti:"'Cuide de quem cuida de tudo' — vídeo com mulheres reais",g:"Branding emocional",r:"Escritora + Videomaker"},
  ]},
  {n:3,tema:"CIÊNCIA & CONFIANÇA",c:B.lo,e:"🔬",dor:"Desconfiança em suplementos, rótulos confusos",prods:["Ômega 3 Vegetal","Magnésio Dimalato","Creatina Gummy"],
   dias:[
    {d:"SEG",t:"BLOG SEO",ti:"Como ler rótulos de suplementos: o guia definitivo",g:"SEO + autoridade máxima",r:"Escritora"},
    {d:"TER",t:"REEL DRA.",ti:"Abrindo nossa cápsula de Ômega 3 vs farmácia — prova visual ao vivo",g:"Prova irrefutável de qualidade",r:"Dra. + Videomaker"},
    {d:"QUA",t:"INFOGRÁFICO",ti:"Magnésio Dimalato x Óxido x Quelato — qual realmente funciona?",g:"Educação técnica + salvar",r:"Escritora"},
    {d:"QUI",t:"REEL FITNESS",ti:"Creatina funciona? Personal faz treino pesado e explica o mecanismo",g:"Prova de performance real",r:"Personal + Parceiro"},
    {d:"SEX",t:"STORIES OFERTA",ti:"Dia do Consumidor: Frete Grátis 24h para quem responder 'EU QUERO'",g:"Urgência + conversão imediata",r:"Escritora"},
    {d:"SAB",t:"BLOG SEO",ti:"Creatina para mulheres: o guia completo sem mitos",g:"SEO altíssimo volume",r:"Escritora"},
    {d:"DOM",t:"LIVE",ti:"LIVE: Dra. + Personal + cupom exclusivo 20% off ao vivo",g:"Live commerce — conv. 10%",r:"Dra. + Personal + Videomaker"},
  ]},
  {n:4,tema:"PERFORMANCE & RESULTADO",c:B.pe,e:"⚡",dor:"Foco baixo, cansaço no treino, recuperação lenta",prods:["Celeris","Cellshot","Creatina Gummy"],
   dias:[
    {d:"SEG",t:"BLOG SEO",ti:"Taurina + Cafeína: a combinação que substituiu o pré-treino caro",g:"SEO: melhor pré-treino natural",r:"Escritora"},
    {d:"TER",t:"COLLAB TREND",ti:"Trend: 'Eu sou Personal, tomo Creatina. Eu sou Nutri, indico para memória'",g:"Trend viral — alto compartilhamento",r:"Personal + Dra."},
    {d:"QUA",t:"REEL DRA.",ti:"3 ingredientes que PROIBI na fórmula On.Cells — transparência total",g:"Polêmica + construção de confiança",r:"Dra. + Videomaker"},
    {d:"QUI",t:"UGC RESULTADO",ti:"Cliente mostra treino antes x depois de 30 dias com Kit Performance",g:"Prova social de resultado",r:"Cliente/Influencer"},
    {d:"SEX",t:"CARROSSEL",ti:"Kit Performance: o que cada produto faz no seu corpo (hora a hora)",g:"Educação + venda de kit",r:"Escritora"},
    {d:"SAB",t:"BASTIDORES",ti:"Por trás da câmera: o Personal mostrando o setup de gravação On.Cells",g:"Humanização da marca",r:"Personal"},
    {d:"DOM",t:"REEL ASMR",ti:"ASMR: preparando o Cellshot — pó dissolve, cor, textura, aroma",g:"Retenção visual + desejo",r:"Videomaker"},
  ]},
];

/* ── ROTEIROS ── */
const ROTEIROS=[
  {id:"dra",nome:"A Dra. On.Cells",sub:"Educação Científica que Vende",e:"🩺",arq:"O Sábio",c:B.lo,
   cenario:"Consultório, biblioteca, ambientes de autoridade. Luz dourada quente.",
   vest:"Roupa social ou jaleco. Segura caneta — 'o bastão da autoridade'.",
   regra:"NUNCA falar preço. NUNCA segurar o pote como vendedora. O produto aparece como consequência natural.",
   scripts:[
    {p:"Vinagre de Maçã Gummy",l:"Health",c:B.he,ti:"PARE de Tomar Shot de Vinagre",
     cenas:[
      {tag:"GANCHO 0–3s",txt:"(Segura copinho, expressão de desgosto) 'PARE. Agora. Antes de tomar esse shot de manhã.'",dir:"Corte seco — retém 100% no primeiro segundo"},
      {tag:"PROBLEMA 3–15s",txt:"'O ácido acético na forma líquida corrói o esmalte dos seus dentes e irrita o esôfago. A ciência evoluiu.'",dir:"Green screen: imagem de esmalte dentário"},
      {tag:"SOLUÇÃO 15–30s",txt:"(Abre pote On.Cells, mostra gummy) 'Encapsulamos o benefício em pectina vegetal. Mesma ação digestiva. Zero gosto ruim. Ainda tem Vitamina B12.'",dir:"Close extremo na textura da gummy"},
      {tag:"CTA 37–40s",txt:"(Aponta caneta) 'Link na bio. Frete grátis hoje.'",dir:"Tom leve — não de vendedora"},
     ]},
    {p:"Celeris (Taurina + Cafeína)",l:"Performance",c:B.pe,ti:"Café sem Tremedeira",
     cenas:[
      {tag:"GANCHO 0–3s",txt:"'Você não está cansado. Você está sem combustível. E não é magia — é fisiologia.'",dir:"Pausa de 1s após 'fisiologia'"},
      {tag:"PROBLEMA 3–15s",txt:"'Tomar litros de café só acelera o batimento, não o cérebro. Para foco real, o neurônio precisa de proteção. É aí que entra a Taurina.'",dir:"Fundo: biblioteca ou quadro negro"},
      {tag:"MECANISMO 15–28s",txt:"'Cafeína acelera. Taurina direciona. Sem essa combinação, você é um carro rápido sem volante.'",dir:"Desenha diagrama no ar com caneta"},
      {tag:"CTA 37–40s",txt:"'Link na bio. Testa 7 dias e me conta.'",dir:"Sorriso leve de confiança"},
     ]},
    {p:"Ômega 3 Vegetal",l:"Health",c:B.he,ti:"3 Ingredientes que Proibi",
     cenas:[
      {tag:"GANCHO 0–3s",txt:"'3 ingredientes que eu PROIBI na fórmula da On.Cells.' (pausa, olha à câmera)",dir:"Polêmica imediata"},
      {tag:"LISTA 3–22s",txt:"'1. Corante artificial. 2. Açúcar disfarçado de maltodextrina. 3. Metais pesados do óleo de peixe barato. Por isso nosso Ômega vem de algas.'",dir:"Cada item com corte rápido"},
      {tag:"PROVA 22–35s",txt:"(Abre cápsula concorrente ao lado da On.Cells) 'Olha a diferença. Saúde é coisa séria.'",dir:"Prova visual irrefutável"},
      {tag:"CTA 35–40s",txt:"'Linha limpa. Sem atalhos. Link na bio.'",dir:"Curto, direto, confiante"},
     ]},
   ]},
  {id:"consult",nome:"A Consultora",sub:"Bastidor que Humaniza e Vende",e:"🏪",arq:"A Melhor Amiga que Resolve",c:B.tp,
   cenario:"Loja On.Cells — interior e exterior. Som ambiente vaza levemente.",
   vest:"Uniforme On.Cells. Camiseta ou blazer casual da marca.",
   regra:"NUNCA usar termos médicos sem explicar. A intimidade e o 'bastidor' são o produto.",
   scripts:[
    {p:"Melatonina Gummy",l:"Longevity",c:B.lo,ti:"O Botão de Desligar",
     cenas:[
      {tag:"GANCHO (Bastidor)",txt:"(Suspira, segura dois potes) 'Vou contar um segredo: toda segunda-feira, esse é o primeiro produto que esgota.'",dir:"Tom de revelação íntima"},
      {tag:"CONEXÃO HUMANA",txt:"'O pessoal chega com aquela cara de quem brigou com o travesseiro. A Dra. explica ciclo circadiano... mas na prática, a cabeça não desliga.'",dir:"Pausa empática"},
      {tag:"PRODUTO",txt:"'A gente chama a Melatonina Gummy de botão de desligar. Uma gominha de maracujá e, meia hora depois... paz.'",dir:"Voz quase sussurro no final"},
      {tag:"CTA",txt:"'Link na bio. Dormir bem não tem preço.'",dir:"Sorriso genuíno"},
     ]},
    {p:"Aura Woman",l:"Woman",c:B.wo,ti:"O Best-Seller de Beleza",
     cenas:[
      {tag:"GANCHO (Embalando)",txt:"(Confere sacola) 'Impressionante... de cada 10 pedidos que embalo, 8 têm esse potinho rosa.'",dir:"Câmera inclinada, bastidor autêntico"},
      {tag:"CONEXÃO",txt:"'A gente cansa de brigar com a pele na TPM. O corpo tá pedindo nutrição, e a gente tá dando maquiagem.'",dir:"Pausa reflexiva — cumplicidade feminina"},
      {tag:"PRODUTO",txt:"'O Aura Woman é nosso best-seller de beleza. Óleo de Borragem puro. Depois de 20 dias a pele muda a textura.'",dir:"Tom de guardar segredo"},
      {tag:"CTA",txt:"'Link na bio. Mas corre — esse lote voa.'",dir:"Urgência real, não forçada"},
     ]},
   ]},
  {id:"ugc",nome:"Influencer / Parceiro",sub:"Prova Social Autêntica",e:"🤝",arq:"A Melhor Amiga que Descobriu",c:B.pe,
   cenario:"Ambiente pessoal autêntico: academia, cozinha, carro.",
   vest:"Livre. Pode mostrar unboxing On.Cells.",
   regra:"NÃO forçar post. NÃO usar script engessado. Autenticidade é inegociável.",
   scripts:[
    {p:"Desafio 21 Dias — Entrada",l:"All",c:B.go,ti:"Dia 1 do Desafio",
     cenas:[
      {tag:"ABERTURA",txt:"'Gente, recebi o kit On.Cells e vou fazer o Desafio 21 Dias ao vivo aqui com vocês. Olha o que veio!'",dir:"Unboxing animado"},
      {tag:"UNBOXING",txt:"(Abre cada produto, experimenta a gummy) 'Essa Creatina em gummy tá boa demais. De verdade?!'",dir:"Reação genuína — NUNCA atue"},
      {tag:"COMPROMISSO",txt:"'21 dias vou tomar direitinho e postar o progresso. Segue pra acompanhar. Cupom [NOME] no link.'",dir:"Tom de desafio"},
      {tag:"CTA",txt:"'Dia 1 começou. Vamos juntos?'",dir:"Energia alta, pergunta para engajar"},
     ]},
    {p:"Resultado 20 dias — Vinagre Gummy",l:"Health",c:B.he,ti:"Antes x Depois Real",
     cenas:[
      {tag:"GANCHO",txt:"(Close no rosto) '20 dias de Vinagre de Maçã Gummy da On.Cells. Olha o que aconteceu com o meu inchaço.'",dir:"Pausa dramática de 2s"},
      {tag:"RESULTADO",txt:"'Acordava com o rosto inchado todo dia. Isso acabou. Sem tomar aquele shot que queima a garganta.'",dir:"Foto real — autenticidade > perfeição"},
      {tag:"CTA",txt:"'Link na bio, cupom [NOME]. Comenta QUERO que te mando o link direto.'",dir:"Engajamento nos comentários amplifica alcance"},
     ]},
   ]},
];

/* ── KIT INFLUENCER ── */
const KIT_INF=[
  {n:"01",t:"Seleção Criteriosa",e:"🎯",c:B.he,desc:"Qualidade antes de quantidade. Relevância antes de alcance.",
   items:["Engajamento real acima de 3%","Nicho: saúde, fitness, beleza consciente, alimentação","Micro (5k-50k): conversão 3-5x maior que mega no nicho saúde","Verificar parceria com concorrentes últimos 60 dias"],
   dica:"Um influencer de 12k no nicho certo converte mais que 500k genérico. Relevância > alcance bruto."},
  {n:"02",t:"Primeiro Contato",e:"💬",c:B.pe,desc:"Convite para parceria, não transação comercial.",
   tmpl:"Oi [Nome]!\n\nAqui é o [Seu Nome], da On.Cells.\n\nAcompanho seu conteúdo sobre [TÓPICO] e a forma como você comunica [ALGO ESPECÍFICO] é exatamente o que buscamos.\n\nQueria te enviar um kit para você testar — sem compromisso, sem script. Se gostar e fizer sentido, a gente conversa. Se não gostar — me fala, quero o feedback honesto.\n\nO que você acha?",
   dica:"Mencione ALGO ESPECÍFICO do perfil deles. NUNCA copie e cole para todos."},
  {n:"03",t:"Montagem do Kit",e:"📦",c:B.lo,desc:"O unboxing é o primeiro conteúdo da parceria. Precisa gerar 'uau'.",
   items:["Caixa personalizada On.Cells (não caixa de papelão)","3–4 produtos selecionados para o PERFIL do influencer","Carta escrita à mão ou impressa em papel especial","Card com cupom exclusivo: [NOME_DO_INFLUENCER]","Mini guia 'Como usar': quando tomar, o que esperar, tempo para resultado"],
   dica:"A carta à mão é o detalhe que diferencia. Em era de automação, um manuscrito cria conexão emocional."},
  {n:"04",t:"A Carta do Kit",e:"✉️",c:B.go,desc:"Tom: fundador para pessoa. Pessoal, sem corporatês.",
   tmpl:"[Nome],\n\nObrigado por aceitar receber esse kit.\n\nVocê vai encontrar:\n→ [Produto 1]: [benefício em 1 linha]\n→ [Produto 2]: [benefício em 1 linha]\n\nMeu único pedido: testa por pelo menos 15 dias antes de falar. Resultado real leva tempo.\n\nSe gostar — adoraríamos parceria. Se não gostar — me fala. Feedback honesto vale mais que post obrigatório.\n\nSeu cupom: [CUPOM]\n\nCom gratidão,\n[Fundador]\nOn.Cells",
   dica:"NÃO inclua obrigações de post na carta. Isso vai no briefing — DEPOIS que testarem."},
  {n:"05",t:"Briefing Pós-Teste",e:"📋",c:B.br,desc:"Enviado 15 dias após o kit. Liberdade criativa dentro de parâmetros.",
   tmpl:"[Nome], tudo bem?\n\nFormatos que convertem:\n• Rotina de uso: quando e como você usa no dia a dia\n• Resultado notado: qualquer mudança — energia, sono, pele\n• Resposta a dúvidas sobre suplementos\n\nObrigatório (CONAR):\n• Marcar @on.cells.nutri\n• #parceriacomercial se remunerado\n• Cupom: [CUPOM]\n\nQualquer dúvida me chama 🙏",
   dica:"Influencer que posta 'do seu jeito' converte 3x mais que quem segue roteiro engessado."},
  {n:"06",t:"Relacionamento Longo Prazo",e:"♾️",c:B.wo,desc:"Parceiro fiel vale infinitamente mais que post único.",
   items:["Repostar conteúdo nas Stories On.Cells dentro de 24h","Comentar com personalidade — não apenas emojis","Enviar novo produto a cada lançamento","Grupo Elite WhatsApp: novidades e materiais em primeira mão","Relatório mensal: vendas do cupom — cria ownership e comprometimento"],
   dica:"Parceiro que se sente parte da marca cria conteúdo espontâneo não-pago — o mais valioso que existe."},
];

/* ── BLOG & SEO ── */
const BLOG=[
  {m:"MÊS 1",f:"Autoridade Fundacional",c:B.he,
   arts:[
    {t:"Como ler rótulos de suplementos: o guia definitivo para não ser enganado",kw:"como escolher suplemento",vol:"Alto",dif:"Baixa",p:"Linha geral"},
    {t:"Creatina para mulheres: o guia completo sem mitos",kw:"creatina para mulher",vol:"Muito Alto",dif:"Média",p:"Creatina Gummy"},
    {t:"Magnésio Dimalato x Óxido x Quelato: qual realmente funciona?",kw:"melhor tipo de magnésio",vol:"Médio",dif:"Baixa",p:"Magnésio Dimalato"},
    {t:"O que é nutrição celular e por que isso muda tudo sobre saúde",kw:"nutrição celular",vol:"Baixo",dif:"Baixa",p:"Marca On.Cells"},
  ]},
  {m:"MÊS 2",f:"SEO de Produto + Dor Específica",c:B.pe,
   arts:[
    {t:"Taurina + Cafeína: a combinação que substituiu o pré-treino caro",kw:"melhor pré-treino natural",vol:"Alto",dif:"Média",p:"Celeris"},
    {t:"Ômega 3 de algas vs peixe: por que a ciência está mudando de lado",kw:"melhor ômega 3",vol:"Muito Alto",dif:"Alta",p:"Ômega 3 Vegetal"},
    {t:"Por que você acorda cansado mesmo dormindo 8 horas?",kw:"cansaço ao acordar",vol:"Muito Alto",dif:"Baixa",p:"Melatonina + Magnésio"},
    {t:"Borragem vs Prímula: qual o melhor óleo para a saúde da mulher?",kw:"suplemento para TPM",vol:"Médio",dif:"Baixa",p:"Aura Woman"},
  ]},
  {m:"MÊS 3",f:"Long-tail + Conversão Direta",c:B.lo,
   arts:[
    {t:"GABA: o neurotransmissor do relaxamento que ninguém te apresentou",kw:"gaba suplemento ansiedade",vol:"Médio",dif:"Baixa",p:"Gaba Equilibrium"},
    {t:"Vinagre de maçã em gummy vs líquido: o que a ciência mostra",kw:"vinagre de maçã benefícios",vol:"Muito Alto",dif:"Baixa",p:"Vinagre Gummy"},
    {t:"Protocolo de suplementação feminina por fase do ciclo menstrual",kw:"suplemento ciclo menstrual",vol:"Médio",dif:"Baixa",p:"Linha Woman"},
    {t:"Suplementos para foco e concentração: os que a ciência realmente apoia",kw:"suplemento para foco",vol:"Alto",dif:"Média",p:"Bioserin + Cellshot"},
  ]},
  {m:"MÊS 4+",f:"Comunidade + Lançamentos",c:B.wo,
   arts:[
    {t:"Coenzima Q10: o suplemento que cardiologistas recomendam mas ninguém conhece",kw:"coenzima q10 para que serve",vol:"Médio",dif:"Baixa",p:"Coenzima Q10"},
    {t:"Como montar sua suplementação do zero sem desperdiçar dinheiro",kw:"como começar suplementação",vol:"Muito Alto",dif:"Alta",p:"Linha geral"},
    {t:"Saúde masculina acima dos 40: o que a ciência realmente comprova",kw:"suplemento homem 40 anos",vol:"Médio",dif:"Baixa",p:"Linha Performance"},
    {t:"1 ano de On.Cells: o que aprendemos sobre nutrição celular",kw:"on cells suplemento",vol:"Baixo",dif:"Baixa",p:"Marca"},
  ]},
];

/* ── CALENDÁRIO — dados ricos (calendar 2026 + guia final merged) ── */
const MESES=[
  {id:"m01",slug:"MAR/26",e:"🌸",c:B.wo,linha:"Woman",per:"16–31 Mar",
   tema:"LANÇAMENTO & IDENTIDADE",tl:"\"Comece pelo que você coloca dentro — não pelo que passa por fora.\"",
   visao:"Primeiras 2 semanas de operação. Objetivo: posicionar a marca, não vender. Cada post deve apresentar UM produto com seu mecanismo de ação. O cliente que aprende primeiro, compra convicto depois.",
   camp:{n:"Apresentação da On.Cells",d:"Série 'Conheça o que você está colocando no corpo' — um produto por dia com ingrediente, mecanismo de ação e benefício real. Sem desconto. Construção de autoridade.",g:"'A verdadeira beleza vem de dentro' — apresentar a filosofia da marca em formato story."},
   kit:{n:"Kit Boas-Vindas On.Cells",prods:["Vinagre de Maçã Gummy","Magnésio Dimalato","Melatonina Gummy"],preco:"R$ 169,90",just:"Metabolismo + sono + relaxamento — o trio de entrada para quem nunca suplementou. Baixo risco de abandono.",extra:null},
   datas:[{d:"20/03",n:"Início do Outono",t:"sz"},{d:"22/03",n:"Dia Mundial da Água",t:"sp"}],
   canais:{instagram:["Série 'Você Sabia?': 1 Story por dia — ingrediente + mecanismo de ação","Reel de apresentação da marca: por que criamos a On.Cells — storytelling","Carrossel educativo: 'Como ler um rótulo de suplemento sem ser enganado'","Feed: Paleta da marca + logo — anúncio oficial do lançamento visual"],tiktok:["Primeiro TikTok: 'Por que você deveria saber o que está tomando' — gancho polêmico","Dueto/React de tendência de saúde incorreta — posicionamento de autoridade","Meta: 1 post/dia para construir histórico de conta"],blog:["'Como ler rótulos de suplementos: guia completo para não ser enganado'","'O que é nutrição celular e por que isso muda tudo'"],videos:["Vídeo institucional On.Cells (2 min) — quem somos, por que existimos, nossa filosofia","Reel educativo: Magnésio Dimalato vs Óxido — a diferença que ninguém te conta"],site:["Instalar app de avaliações — meta: 3+ reviews por produto antes de escalar ADS","Criar página 'Nossa Ciência' com ingredientes, estudos e referências científicas","Configurar pop-up de captura de e-mail: 'Receba o guia de suplementação gratuito'"],ads:["⚠️ NÃO investir em ADS este mês — coletar reviews primeiro","Configurar Meta Pixel e públicos personalizados para ativar em Abril","Criar biblioteca de criativos para testar quando o momento chegar"]},
   kpis:{rec:"R$ 3.000",ig:2200,tt:150,roas:"—",budget:"R$ 0"}},

  {id:"m02",slug:"ABR/26",e:"🐣",c:B.he,linha:"Health",per:"1–30 Abr",
   tema:"PÓS-PÁSCOA: DETOX COM CIÊNCIA",tl:"\"Seu fígado não precisa de culpa. Precisa de ciência.\"",
   visao:"A culpa pós-Páscoa é o gatilho emocional. Mas a diferença de On.Cells é explicar o mecanismo bioquímico por trás do detox. Quando o cliente entende, ele compra convicto — e não abandona o produto na primeira semana.",
   camp:{n:"Protocolo Detox Inteligente",d:"'Não é castigo — é ciência.' Série explicando o mecanismo bioquímico do detox. Quando o cliente entende, compra convicto.",g:"'O que realmente acontece no seu fígado depois da Páscoa' — série 3 reels educativos"},
   kit:{n:"Kit Detox Inteligente",prods:["Vinagre de Maçã Gummy","Ômega 3 Vegetal","Magnésio Dimalato"],preco:"R$ 189,90",just:"Metabolismo (Vinagre) + anti-inflamatório (Ômega 3) + regulação intestinal (Magnésio). Tripla ação com base científica.",extra:"Guia digital: '7 dias de protocolo detox — o que tomar, quando e por quê'"},
   datas:[{d:"05/04",n:"Páscoa ⭐",t:"cm"},{d:"21/04",n:"Tiradentes (feriado)",t:"fh"}],
   canais:{instagram:["Reel Dra. (08/04): 'O que acontece no fígado depois de 3 dias de chocolate'","Carrossel: Ômega 3 de algas vs peixe — diferenças visuais e científicas","Stories: enquete 'Você se sentiu inchado?' → resposta com solução","Countdown Kit Detox do dia 7 ao 14/04"],tiktok:["Trend: POV você vs seu fígado depois da Páscoa — humor + ciência","Educação 60s: 'Por que o Vinagre em gummy é mais seguro que o shot'","Dueto com trend de detox errado — reposicionamento de autoridade"],blog:["'Detox pós-Páscoa: o que a ciência diz que funciona (e o que é mito)'","'Ômega 3 de algas: por que é melhor que o de peixe segundo a pesquisa'"],videos:["Reel Dra.: prova visual cápsula On.Cells vs farmácia","Story series: 'Protocolo 7 dias' — um vídeo por dia"],site:["Landing page Kit Detox com explicação científica de cada produto","Pop-up: 'Baixe o protocolo detox de 7 dias — gratuito'"],ads:["Ativar apenas se tiver 3+ reviews — budget R$ 2.000","A/B: criativo educativo vs criativo de oferta","Segmentação: mulheres 25-45, saúde e nutrição"]},
   kpis:{rec:"R$ 7.000",ig:3200,tt:400,roas:"2.5x",budget:"R$ 1.500"}},

  {id:"m03",slug:"MAI/26",e:"💐",c:B.wo,linha:"Woman",per:"1–31 Mai",
   tema:"DIA DAS MÃES ⭐⭐⭐",tl:"\"O presente mais completo ensina a mãe a se cuidar de dentro.\"",
   visao:"Diferencial absoluto de On.Cells no Dia das Mães: o kit vem com guia educativo impresso. A filha não está comprando um suplemento — está dando à mãe o conhecimento de como cuidar de si mesma. Isso gera emoção + utilidade + fidelização.",
   camp:{n:"Mamãe On.Cells — O Presente com Alma",d:"Kit com guia científico impresso + QR para vídeos exclusivos da Dra. Campanha do dia 20/04 ao 10/05.",g:"'Este ano, minha mãe vai entender o que está tomando' — emocional + educativo"},
   kit:{n:"Kit Mamãe On.Cells",prods:["Aura Woman","Flex & Care","Melatonina Gummy","Ômega 3 Vegetal"],preco:"R$ 249,90",just:"Beleza de dentro (Aura) + articulações (Flex & Care) + sono profundo (Melatonina) + coração (Ômega 3). O quarteto da saúde feminina acima dos 40.",extra:"Embalagem presenteável + guia científico impresso + carta personalizada + QR para vídeos exclusivos"},
   datas:[{d:"01/05",n:"Dia do Trabalho (feriado)",t:"fh"},{d:"10/05",n:"Dia das Mães ⭐⭐⭐",t:"cm"}],
   canais:{instagram:["Série (01–10/05): 'A ciência do autocuidado feminino' — 4 reels da Dra.","UGC: filhas postando com o kit + tag — repostar com comentário educativo","Live 07/05: Dra. + nutricionista: 'Saúde da mulher acima dos 40'","Stories contagem regressiva do dia 01 ao 10/05"],tiktok:["Trend 'Presenteei minha mãe com conhecimento' — POV com unboxing do guia","Série educativa feminina 60s: Aura Woman — mecanismo do Óleo de Borragem","TikTok da Dra.: '3 coisas que toda mulher acima de 40 deveria suplementar'"],blog:["'Suplementos para mulheres acima de 40: guia completo com base científica'","'Colágeno tipo II vs tipo I: qual age nas articulações e qual age na pele'"],videos:["Vídeo hero Kit Mamãe: abertura + leitura do guia — emoção + informação","Reel: mãe lendo o guia científico e descobrindo como os produtos funcionam"],site:["Landing page Dia das Mães com explicação de cada produto","Frete grátis de 01 a 10/05","Sequência 5 e-mails: educativo → benefícios → kit → urgência → última hora"],ads:["Budget R$ 3.500 — maior do semestre","Segmentação: filhas 22-40 + saúde + presentear","Retargeting visitantes últimos 30 dias"]},
   kpis:{rec:"R$ 18.000",ig:4800,tt:800,roas:"3.2x",budget:"R$ 3.200"}},

  {id:"m04",slug:"JUN/26",e:"💛",c:B.pe,linha:"Performance",per:"1–30 Jun",
   tema:"NAMORADOS & ENERGIA CELULAR",tl:"\"Energia de verdade começa no nível celular. Para os dois.\"",
   visao:"Festa Junina + Dia dos Namorados criam dois ganchos: energia para os festejos e presente para o par. Conteúdo deve explicar a fisiologia da energia e como Creatina e Taurina agem no cérebro e músculo.",
   camp:{n:"Kit Casal Performance — Para os Dois",d:"'Vocês no pico' — kit duplo com cards educativos por produto. Fisiologia da energia + como Creatina age no cérebro e músculo.",g:"'Que presente é melhor que energia para aproveitar tudo junto?' — reframing do presente"},
   kit:{n:"Kit Casal Performance",prods:["Creatina Gummy (×2)","Celeris (×2)","Melatonina Gummy (×2)"],preco:"R$ 289,90",just:"Energia cognitiva + física (Creatina) + foco limpo sem tremedeira (Celeris) + recuperação noturna (Melatonina). Para os dois, juntos.",extra:"Cards científicos individuais por produto + embalagem dupla presenteável"},
   datas:[{d:"04/06",n:"Corpus Christi (feriado)",t:"fh"},{d:"12/06",n:"Dia dos Namorados ⭐⭐",t:"cm"},{d:"Todo Jun",n:"Festa Junina",t:"sz"}],
   canais:{instagram:["Carrossel: 'A fisiologia da energia — por que você cansa no meio do dia'","Reel Dra.: 'Creatina para mulheres — desmistificando o maior mito do fitness'","Trend Namorados: casal tomando suplemento + educação sobre mecanismo","Stories: 'Festa junina sem cair às 22h — o protocolo de energia'"],tiktok:["Dueto: 'Eu sou Personal, tomo Creatina. Eu sou Dra., indico para cognição'","Educação 60s: 'Taurina + Cafeína — combinação que neurologistas estudam'","POV: 'Presenteei meu namorado com ciência — olha a reação'"],blog:["'Creatina para mulheres: a verdade científica que o mercado esconde'","'Taurina e Cafeína: por que funciona melhor que qualquer pré-treino caro'"],videos:["Reel Dra.: fisiologia do cansaço — onde entra a suplementação","Vídeo Consultora: 'O que mais vendo no Dia dos Namorados'"],site:["Banner Dia dos Namorados + explicação científica dos produtos","Frete grátis para kits acima de R$ 200"],ads:["Budget R$ 2.800 — casais 25-40 + fitness","A/B test: criativo educativo vs aspiracional","ROAS mínimo 3.0x antes de escalar"]},
   kpis:{rec:"R$ 12.000",ig:5600,tt:1100,roas:"3.0x",budget:"R$ 2.500"}},

  {id:"m05",slug:"JUL/26",e:"💜",c:B.lo,linha:"Longevity",per:"1–31 Jul",
   tema:"JULHO AMARELO — LONGEVIDADE CELULAR",tl:"\"Longevidade não se compra. Se constrói — célula por célula.\"",
   visao:"Julho Amarelo (saúde do fígado) é a abertura perfeita para a linha Longevity. Série editorial profunda com a Dra. explicando oxidação celular, envelhecimento e o papel dos suplementos na manutenção celular a longo prazo.",
   camp:{n:"Protocolo Longevidade — A Série",d:"4 reels da Dra.: oxidação celular → Ômega 3 e inflamação → Coenzima Q10 e mitocôndria → sono e regeneração. Mini-doc 3 min.",g:"'O que acontece nas suas células quando você envelhece — e o que você pode fazer agora'"},
   kit:{n:"Kit Longevidade",prods:["Ômega 3 Vegetal","Coenzima Q10","Magnésio Dimalato","Melatonina Gummy"],preco:"R$ 229,90",just:"Anti-inflamatório sistêmico (Ômega 3) + energia mitocondrial (Q10) + mais de 300 funções celulares (Magnésio) + regeneração noturna (Melatonina). Protocolo científico completo.",extra:"Protocolo escrito: horário ideal, dose e mecanismo de ação de cada produto"},
   datas:[{d:"Todo Jul",n:"Julho Amarelo — Saúde Hepática",t:"sz"},{d:"28/07",n:"Dia do Nutricionista",t:"sp"}],
   canais:{instagram:["Série 'A Ciência da Longevidade' — 4 reels da Dra. (1/semana)","Carrossel: 'O que acontece nas suas células quando você envelhece'","Collab com médico/nutricionista: 'Protocolo de longevidade na prática'","Stories: 'Julho Amarelo — saúde do fígado e suplementação'"],tiktok:["Educação 60s: 'Coenzima Q10 — a molécula que cardiologistas monitoram'","Trend férias: 'Minha rotina de suplementação nas férias'","React a notícia sobre longevidade — autoridade científica"],blog:["'Longevidade celular: o guia científico completo'","'Coenzima Q10: por que cardiologistas recomendam'","'Julho Amarelo: saúde hepática e suplementação'"],videos:["Mini-doc 'A Ciência da Longevidade' (3 min) — brand hero do mês","Animação: mitocôndria + Coenzima Q10 — educação visual"],site:["Landing page 'Protocolo Longevidade' com cronograma + referências","Google Search Console ativado — monitorar blog"],ads:["Budget R$ 2.500 — 35-60 anos + saúde preventiva","Lookalike de compradores existentes"]},
   kpis:{rec:"R$ 10.000",ig:6400,tt:1500,roas:"3.0x",budget:"R$ 2.300"}},

  {id:"m06",slug:"AGO/26",e:"👨‍👧",c:B.pe,linha:"Performance",per:"1–31 Ago",
   tema:"DIA DOS PAIS ⭐⭐⭐",tl:"\"Pai que entende o que toma, toma todo dia.\"",
   visao:"Saúde masculina é raramente abordada com profundidade científica. Diferencial On.Cells: explicar por que homens acima de 40 têm necessidades específicas. O kit vem com guia masculino que educa o pai sobre por que cada produto foi escolhido para ele.",
   camp:{n:"Kit Pai Performance",d:"'O presente que o seu pai vai usar todo dia porque vai entender por quê.' Kit com guia masculino impresso explicando: Creatina e cognição, Magnésio e testosterona, Ômega 3 cardiovascular.",g:"'Meu pai tomava suplemento sem saber por quê. Esse presente muda isso' — reposicionamento emocional"},
   kit:{n:"Kit Pai Performance",prods:["Creatina Gummy","Celeris","Magnésio Dimalato","Ômega 3 Vegetal"],preco:"R$ 239,90",just:"Força e cognição (Creatina) + foco diário (Celeris) + hormônios e sono (Magnésio) + saúde cardiovascular (Ômega 3). Protocolo masculino com base em pesquisa.",extra:"Guia masculino: 'O que muda no corpo do homem depois dos 40 — e o que a ciência recomenda'"},
   datas:[{d:"09/08",n:"Dia dos Pais ⭐⭐⭐",t:"cm"},{d:"05/08",n:"Dia Nacional da Saúde",t:"sp"}],
   canais:{instagram:["Série: Personal masculino explica saúde do homem com ciência — 3 reels","Reel Dra.: 'O que muda no homem depois dos 40 — a ciência que ninguém conta'","UGC: filhos presenteando pais + leitura do guia"],tiktok:["'Coisas que homens não sabem sobre suplementação mas deveriam'","POV: pai lendo o guia On.Cells e entendendo pela primeira vez","Trend Dia dos Pais: presente com significado real"],blog:["'Saúde masculina acima dos 40: protocolo científico completo'","'Creatina para cognição masculina: o que os estudos mostram'"],videos:["Reel Personal: 'Ciência do corpo masculino acima dos 40'","Vídeo hero Kit Pai com guia masculino"],site:["Landing page Dia dos Pais + guia científico","Frete grátis até 09/08"],ads:["Budget R$ 3.000 — filhos/filhas + saúde masculina","Retargeting compradores Dia das Mães"]},
   kpis:{rec:"R$ 15.000",ig:7200,tt:1900,roas:"3.3x",budget:"R$ 2.800"}},

  {id:"m07",slug:"SET/26",e:"🌺",c:B.be,linha:"Beauty",per:"1–30 Set",
   tema:"PRIMAVERA — GLOW DE DENTRO",tl:"\"Pele bonita não é maquiagem. É bioquímica.\"",
   visao:"Primavera é sinônimo de renovação. Diferencial On.Cells: mostrar que o glow real começa na nutrição celular, não no produto de beleza externo. Conteúdo-chave: o que realmente afeta a pele (inflamação sistêmica, ômega 3, vitaminas).",
   camp:{n:"Kit Glow Primavera",d:"'O que realmente afeta sua pele — e o que creme não resolve.' Série de reels sobre bioquímica da pele.",g:"'Seu skincare mais importante não é o que passa — é o que toma' — disrupção do beauty market"},
   kit:{n:"Kit Glow Primavera",prods:["Aura Woman","Ômega 3 Vegetal","Magnésio Dimalato","Vinagre de Maçã Gummy"],preco:"R$ 219,90",just:"Regeneração celular (Aura/Borragem) + anti-inflamatório de pele (Ômega 3) + colágeno e sono (Magnésio) + microbioma e metabolismo (Vinagre). 4 frentes da beleza de dentro.",extra:"Guia 'Skincare de dentro: protocolo científico'"},
   datas:[{d:"15/09",n:"Dia do Cliente ⭐",t:"cm"},{d:"23/09",n:"Início da Primavera",t:"sz"}],
   canais:{instagram:["Carrossel viral: 'Por que sua pele não melhora com creme'","Reel Dra.: inflamação sistêmica e como ela aparece na pele","15/09 Dia do Cliente: desconto exclusivo base por e-mail"],tiktok:["'Coisas que afetam sua pele que você não sabia'","Educação 60s: Ômega 3 e pele — mecanismo anti-inflamatório","POV Primavera: rotina de suplementação no calor"],blog:["'Beleza de dentro: a ciência do que realmente afeta sua pele'","'Óleo de Borragem vs Prímula: qual é melhor?'"],videos:["ASMR educativo: cada produto Kit Glow na pele","Reel: 'Skincare de dentro — o que você não está fazendo'"],site:["Cupom Dia do Cliente 15/09 — 15% off base de e-mail","Banner Primavera + Kit Glow em destaque"],ads:["Budget R$ 2.800 — beleza + skincare 20-45","Criativo: dado científico + produto"]},
   kpis:{rec:"R$ 14.000",ig:7800,tt:2200,roas:"3.3x",budget:"R$ 2.600"}},

  {id:"m08",slug:"OUT/26",e:"🎀",c:B.wo,linha:"Woman",per:"1–31 Out",
   tema:"OUTUBRO ROSA ⭐",tl:"\"Prevenção não é laço. É conhecimento.\"",
   visao:"Outubro Rosa de On.Cells é sobre prevenção com ciência real — não apenas cor. Diferencial: parceria com ginecologista, 10% do kit doado com rastreabilidade, e conteúdo sobre saúde hormonal feminina com profundidade científica.",
   camp:{n:"Ela Cuida — Outubro Rosa",d:"Prevenção com ciência real. 10% doado com rastreabilidade. Parceria com ginecologista. Sem clichê de laço — com dado científico.",g:"'Outubro Rosa além do laço: o que a ciência recomenda para prevenir de verdade'"},
   kit:{n:"Kit Rosa — Ela Cuida",prods:["Aura Woman","Ômega 3 Vegetal","Magnésio Dimalato","Gaba Equilibrium"],preco:"R$ 209,90",just:"Hormônios e beleza (Aura) + anti-inflamatório sistêmico (Ômega 3) + sistema nervoso e sono (Magnésio) + equilíbrio emocional (Gaba). Saúde feminina completa.",extra:"10% do valor doado à parceira de saúde feminina + carta de transparência com rastreabilidade"},
   datas:[{d:"Todo Out",n:"Outubro Rosa",t:"sz"},{d:"12/10",n:"N. Sra. Aparecida (feriado)",t:"fh"}],
   canais:{instagram:["Série 'Prevenção com Ciência' — 4 posts educativos (1/semana)","Live com ginecologista: saúde hormonal feminina com profundidade","Post de transparência: como a doação 10% é usada — com rastreabilidade"],tiktok:["Série Outubro Rosa sem clichê — ciência real sobre saúde feminina","'Coisas sobre saúde da mulher que ninguém nos ensina na escola'","POV: 'Outubro Rosa me ensinou sobre hormônios'"],blog:["'Saúde hormonal feminina: guia científico completo'","'Outubro Rosa além do laço: ações baseadas em evidência'"],videos:["Mini-doc 'O que toda mulher deveria saber' (3 min)","Reel Dra.: saúde hormonal com profundidade científica"],site:["Banner Outubro Rosa + transparência da doação","E-mail: 'Nossa campanha de prevenção — veja onde vai o dinheiro'"],ads:["Budget R$ 3.200 — mulheres 25-55 saúde preventiva","Lookalike compradores linha Woman"]},
   kpis:{rec:"R$ 16.000",ig:8500,tt:2700,roas:"3.5x",budget:"R$ 3.000"}},

  {id:"m09",slug:"NOV/26",e:"🖤",c:B.dk,linha:"All",per:"1–30 Nov",
   tema:"BLACK FRIDAY ⭐⭐⭐",tl:"\"A Black Friday de quem já entende o que está comprando.\"",
   visao:"Estratégia em 3 fases: Pré-Black (01-19/11) = 30 dias de countdown educativo, 1 post por dia sobre os 5 produtos do kit. Black Week (20-26/11) = Lista VIP recebe acesso 24h antes. Black Friday (27/11) = oferta aberta com máximo urgência.",
   camp:{n:"BLACK CELLS — Kit Definitivo",d:"Kit Black em embalagem preta exclusiva + guia científico premium. Lista VIP: acesso 24h antes. 30 dias de countdown educativo no Instagram.",g:"'Enquanto todo mundo empurra desconto, a gente entrega conhecimento. E o desconto vem junto.'"},
   kit:{n:"Kit Black Cells",prods:["Cellshot","Creatina Gummy","Celeris","Melatonina Gummy","Aura Woman"],preco:"R$ 339,90 (29% off)",just:"O kit mais completo do ano: energia + foco + performance + sono + beleza. Sinergia dos 5 produtos explicada no guia premium.",extra:"Embalagem preta exclusiva + guia científico premium + acesso grupo VIP WhatsApp"},
   datas:[{d:"20-26/11",n:"Pré-Black — Lista VIP",t:"cm"},{d:"27/11",n:"BLACK FRIDAY ⭐⭐⭐",t:"cm"},{d:"30/11",n:"Cyber Monday",t:"cm"}],
   canais:{instagram:["Countdown 30 dias: 1 post educativo/dia sobre os 5 produtos do kit","Lives diárias Black Week com Dra. + Q&A científico","Captura VIP WhatsApp — acesso 24h antes do Black Friday"],tiktok:["'Por que esse é o kit mais completo — explicação científica'","Lives TikTok Black Week — simultâneas com Instagram","Trend: comprar com consciência vs comprar por impulso"],blog:["'Black Friday de suplementos: como não desperdiçar'","'O protocolo completo On.Cells: por que esses 5 juntos'"],videos:["Unboxing Kit Black com explicação científica de cada produto","Reel Dra.: 'A sinergia dos 5 — por que funcionam juntos'"],site:["Landing page BLACK CELLS com countdown ao vivo","Pop-up captura VIP — 'Quero acesso 24h antes'","Sequência 5 e-mails: VIP → educação → urgência → última hora → Cyber Monday"],ads:["Budget R$ 7.000 — maior do ano","Retargeting TODOS visitantes 180 dias","Whitelisting 4-5 influencers na semana"]},
   kpis:{rec:"R$ 35.000",ig:9100,tt:3000,roas:"4.0x",budget:"R$ 7.000"}},

  {id:"m10",slug:"DEZ/26",e:"🎄",c:B.go,linha:"All",per:"1–31 Dez",
   tema:"NATAL ⭐⭐",tl:"\"O melhor presente é aquele que ela vai usar todo dia — e entender por quê.\"",
   visao:"Dezembro equilibra alta demanda de presentes com início de preparação para 2027. Estratégia: Kit Natal com carta da fundadora + Protocolo 2027 em pré-venda para quem já comprou (base existente).",
   camp:{n:"Kit Natal On.Cells",d:"Kit com carta da fundadora, guia de uso e protocolo 2027. Pré-venda Protocolo 2027 lançada 26/12 para base de compradores.",g:"'Esse presente não fica esquecido na gaveta — porque ela vai entender por que está tomando'"},
   kit:{n:"Kit Natal On.Cells",prods:["Aura Woman","Melatonina Gummy","Ômega 3 Vegetal","Vinagre de Maçã Gummy"],preco:"R$ 239,90",just:"Beleza de dentro (Aura) + sono profundo (Melatonina) + coração e pele (Ômega 3) + metabolismo (Vinagre). Os 4 pilares da saúde feminina para quem está começando.",extra:"Carta da fundadora + guia de uso impresso + QR para série de boas-vindas da Dra."},
   datas:[{d:"25/12",n:"Natal ⭐⭐",t:"cm"},{d:"31/12",n:"Réveillon ⭐",t:"cm"}],
   canais:{instagram:["Série: '4 pilares da saúde feminina para 2027'","Countdown Natal + conteúdo dentro do kit (o que a destinatária vai encontrar)","Live 22/12: 'Protocolo 2027 — como criar rotina que você mantém'"],tiktok:["'O presente que ensina a se cuidar' — trend Natal","Réveillon: 'Resolução 2027 com ciência — o que realmente muda o hábito'","Unboxing Kit Natal com leitura da carta da fundadora"],blog:["'Como criar rotina de suplementação que você realmente mantém'","'Os 4 suplementos essenciais para mulheres'"],videos:["Kit Natal — abertura com carta da fundadora","Reel: '2026 — o ano que mudou como me cuido'"],site:["Landing page Natal: guia de presente por perfil de saúde","Pré-venda Protocolo 2027 — ativo a partir de 26/12"],ads:["Budget R$ 5.500 — compradores de presentes","Criativo: carta da fundadora | Criativo: 4 pilares"]},
   kpis:{rec:"R$ 30.000",ig:9500,tt:3200,roas:"4.2x",budget:"R$ 5.500"}},

  {id:"m11",slug:"JAN/27",e:"☀️",c:B.pe,linha:"Performance",per:"1–31 Jan",
   tema:"PROTOCOLO 2027 — RESOLUÇÃO COM CIÊNCIA",tl:"\"Sua resolução precisa de protocolo, não de força de vontade.\"",
   visao:"Janeiro é o mês de maior motivação do ano. Diferencial On.Cells: transformar a resolução de Ano Novo em protocolo científico. #Desafio21DiasOnCells lançado no dia 01/01. Assinatura mensal lançada para converter compradores únicos em recorrentes.",
   camp:{n:"Protocolo 2027 — #Desafio21Dias",d:"Desafio público: 21 dias de protocolo com um post educativo diário. Dia 1: por que esse kit; Dia 7: o que esperar; Dia 21: resultado e próximo nível. Assinatura mensal lançada.",g:"'Não é força de vontade. É neurociência. 21 dias para criar o hábito de verdade.'"},
   kit:{n:"Kit Protocolo 2027",prods:["Cellshot","Creatina Gummy","Celeris","Melatonina Gummy"],preco:"R$ 219,90",just:"Energia matinal (Cellshot) + performance e cognição (Creatina) + foco sustentado (Celeris) + recuperação noturna (Melatonina). O ciclo completo de 24h.",extra:"Protocolo diário impresso: horários + doses + expectativa por semana"},
   datas:[{d:"01/01",n:"Ano Novo ⭐",t:"cm"},{d:"Todo Jan",n:"Alta Temporada Verão",t:"sz"}],
   canais:{instagram:["Lançamento #Desafio21DiasOnCells — 01/01","Live 01/01: Dra. lança Protocolo 2027 ao vivo","Carrossel: 'Por que 21 dias? A neurociência do hábito'"],tiktok:["Série #Desafio21Dias com influencer — 1 vídeo por semana","Trend Ano Novo com ciência real","Live 01/01: 'O que muda no corpo semana a semana'"],blog:["'Protocolo 2027: guia científico completo'","'Por que 21 dias? A neurociência da formação de hábito'"],videos:["Vídeo hero 'Protocolo 2027' — 2 min","Reel diário: mecanismo corporal da semana"],site:["Pop-up #Desafio21Dias — receba protocolo no e-mail","Lançar assinatura mensal: 10% off recorrente"],ads:["Budget R$ 3.600 — amplificar pico orgânico de janeiro","Criativo: resolução científica vs resolução comum"]},
   kpis:{rec:"R$ 20.000",ig:9700,tt:3500,roas:"3.8x",budget:"R$ 3.600"}},

  {id:"m12",slug:"FEV/27",e:"🎭",c:B.be,linha:"Beauty",per:"1–28 Fev",
   tema:"CARNAVAL — ENERGIA REAL, BELEZA REAL",tl:"\"Quatro dias de folia precisam de preparação de quatro semanas.\"",
   visao:"Carnaval cria dois momentos distintos: pré-carnaval (preparação energética + beleza) e pós-carnaval (recuperação científica). Série de 3 partes é o diferencial editorial: Antes / Durante / Depois do Carnaval — com ciência.",
   camp:{n:"Protocolo Carnaval",d:"Série 3 partes: Antes do Carnaval (preparação) / Durante (manutenção) / Depois (recuperação). Cada parte com produtos específicos e explicação do mecanismo.",g:"'Quatro dias de folia precisam de preparação de quatro semanas — e de recuperação científica'"},
   kit:{n:"Kit Carnaval — Brilho Real",prods:["Aura Woman","Celeris","Ômega 3 Vegetal","Vinagre de Maçã Gummy"],preco:"R$ 209,90",just:"Energia limpa sem nervosismo (Celeris) + pele radiante para o carnaval (Aura) + anti-inflamatório para recuperação (Ômega 3) + microbioma pós-folia (Vinagre). Antes, durante e depois.",extra:"Protocolo Carnaval: guia 4 semanas de preparação + recuperação 48h pós"},
   datas:[{d:"13-17/02",n:"Carnaval 2027 ⭐",t:"sz"},{d:"18/02",n:"Quarta-Feira de Cinzas",t:"sp"}],
   canais:{instagram:["Série 'Protocolo Carnaval': Antes/Durante/Depois — 3 reels da Dra.","Reel Dra.: 'A fisiologia da energia para aguentar o carnaval'","Stories: 'Checklist científico pré-carnaval'"],tiktok:["'O que tomo antes do carnaval — e por quê a ciência explica'","Trend carnaval com ciência real","Reel recuperação pós-carnaval: protocolo 48h"],blog:["'Protocolo de Carnaval: guia científico'","'Recuperação pós-carnaval: o que seu corpo precisa'"],videos:["Reel energético: kit + mecanismo para carnaval","Vídeo Consultora: 'O que vendo antes do carnaval'"],site:["Kit Carnaval em destaque + explicação científica","Blog recuperação linkado no Kit"],ads:["Budget R$ 4.000 — 20-40 saúde + beleza + carnaval","Whitelisting 2 influencers lifestyle"]},
   kpis:{rec:"R$ 22.000",ig:9900,tt:3800,roas:"3.8x",budget:"R$ 4.000"}},

  {id:"m13",slug:"MAR/27",e:"🌟",c:B.go,linha:"All",per:"1–16 Mar",
   tema:"1 ANO ON.CELLS ⭐⭐",tl:"\"Um ano ensinando. Uma comunidade que sabe o que toma. Este é o nosso legado.\"",
   visao:"O aniversário de 1 ano é o maior evento de marca do ciclo. Estratégia tripla: Dia Internacional da Mulher (08/03) como gancho de saúde feminina + Aniversário (16/03) como celebração de comunidade + Lançamento de novo produto ao vivo.",
   camp:{n:"1 Ano On.Cells — Edição Numerada",d:"Kit aniversário numerado. Retrospectiva 1 ano. Mini-doc 5min. Lançamento novo produto em live 16/03. '12 meses, 12 mulheres, 12 histórias.'",g:"'Em 1 ano, ensinamos mais sobre suplementação do que anos de marketing genérico conseguiram'"},
   kit:{n:"Kit Aniversário Ed. Numerada",prods:["Aura Woman","Bioserin","Melatonina Gummy","Ômega 3 Vegetal","Gaba Equilibrium"],preco:"R$ 269,90",just:"O melhor da linha Woman + cognitivo + sono + anti-inflamatório + equilíbrio. A síntese do que aprendemos ser o protocolo mais completo para a mulher On.Cells.",extra:"Numeração individual + carta da fundadora especial de aniversário + acesso ao mini-doc exclusivo"},
   datas:[{d:"08/03",n:"Dia Internacional da Mulher ⭐⭐",t:"cm"},{d:"16/03",n:"Aniversário 1 Ano On.Cells 🎂",t:"sp"}],
   canais:{instagram:["08/03: '12 mulheres, 12 histórias, 12 meses — a On.Cells que vocês fizeram'","Countdown aniversário: 1 post/dia — 10 dias antes (06-16/03)","Live 16/03: Dra. + fundadora + lançamento novo produto"],tiktok:["'Do início ao agora — história de uma marca que ensina antes de vender'","Dia da Mulher: série ciência feminina","Live aniversário simultânea TikTok + Instagram"],blog:["'1 ano de On.Cells: o que aprendemos'","'O modelo que funciona: educação gera fidelidade real'"],videos:["Mini-doc '1 Ano On.Cells' (5 min) — brand hero definitivo","Compilação: 12 momentos científicos do ano"],site:["Landing page aniversário com galeria 12 meses","Pré-venda novo produto para base existente"],ads:["Budget R$ 8.000 — maior da história","Lookalike 12 meses de compradores"]},
   kpis:{rec:"R$ 50.000",ig:10000,tt:4200,roas:"4.5x",budget:"R$ 8.000"}},
];

const CANAIS_L=[
  {id:"instagram",l:"📸 Instagram"},{id:"tiktok",l:"🎵 TikTok"},
  {id:"blog",l:"✍️ Blog"},{id:"videos",l:"🎬 Vídeos"},
  {id:"site",l:"🌐 Site"},{id:"ads",l:"🎯 ADS"},
];
const PROJ=MESES.map(m=>({m:m.slug,rec:parseInt(m.kpis.rec.replace(/\D/g,""))||0}));

/* ── API ── */
async function callClaude(p){
  const r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:900,messages:[{role:"user",content:p}]})});
  const d=await r.json();
  const t=(d.content||[]).map(b=>b.text||"").join("").replace(/```json|```/g,"").trim();
  return JSON.parse(t);
}

/* ── APP ── */
export default function App(){
  const [aba,setAba]=useState("visao");
  const [mesId,setMesId]=useState("m01");
  const [canal,setCanal]=useState("instagram");
  const [sem,setSem]=useState(0);
  const [rotId,setRotId]=useState("dra");
  const [scriptI,setScriptI]=useState(0);
  const [kitI,setKitI]=useState(0);
  const [blogI,setBlogI]=useState(0);
  const [brandFase,setBrandFase]=useState("fortes");
  const [checks,setChecks]=useState({});
  const [ai,setAi]=useState({});
  const [copiado,setCopiado]=useState(null);
  const [comments,setComments]=useState({}); // {k:[{text,author,ts}]}
  const [commentOpen,setCommentOpen]=useState(null); // key currently open
  const [commentDraft,setCommentDraft]=useState({});
  const [pins,setPins]=useState({}); // {k:{text,color,tab,label,ts}}
  const [alerts,setAlerts]=useState({}); // {k:{text,color,label,ts}}
  const [alertDraft,setAlertDraft]=useState(null);

  const addComment=(k,text)=>{
    if(!text.trim())return;
    const entry={text:text.trim(),author:"Equipe",ts:new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})};
    setComments(p=>({...p,[k]:[...(p[k]||[]),entry]}));
    setCommentDraft(p=>({...p,[k]:""}));
  };
  const delComment=(k,i)=>setComments(p=>({...p,[k]:p[k].filter((_,j)=>j!==i)}));
  const togglePin=(k,text,color,tabLabel)=>{
    setPins(p=>{
      if(p[k]){const n={...p};delete n[k];return n;}
      return{...p,[k]:{text,color,tabLabel,ts:new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}};
    });
  };
  const setAlert=(k,text,color,label)=>setAlerts(p=>({...p,[k]:{text,color,label,ts:new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit"})}}));
  const clearAlert=(k)=>setAlerts(p=>{const n={...p};delete n[k];return n;});

  const mesAtual=MESES.find(m=>m.id===mesId)||MESES[0];
  const mesIdx=MESES.findIndex(m=>m.id===mesId);
  const rotAtual=ROTEIROS.find(r=>r.id===rotId);
  const scriptAtual=rotAtual?.scripts[scriptI];
  const semAtual=SEMANAS[sem];
  const kitAtual=KIT_INF[kitI];
  const blogAtual=BLOG[blogI];

  const tog=useCallback((k)=>setChecks(p=>({...p,[k]:!p[k]})),[]);
  const done=(k)=>!!checks[k];
  const doneCount=Object.values(checks).filter(Boolean).length;
  const totalCount=Object.keys(checks).length;

  const copiar=(txt,id)=>{navigator.clipboard.writeText(txt);setCopiado(id);setTimeout(()=>setCopiado(null),2000);};

  const runAI=useCallback(async(key,prompt)=>{
    setAi(p=>({...p,[key]:{...p[key],loading:true,open:true,error:null}}));
    try{const data=await callClaude(prompt);setAi(p=>({...p,[key]:{loading:false,open:true,data,error:null}}));}
    catch{setAi(p=>({...p,[key]:{loading:false,open:true,data:null,error:"Erro — tente novamente"}}));}
  },[]);
  const toggleAI=(k)=>setAi(p=>({...p,[k]:{...p[k],open:!p[k]?.open}}));

  const pAlt=(txt,ctx)=>`Você é CAIO v2.0 da On.Cells — marca brasileira de nutrição celular (filosofia: educar→confiar→experimentar→fidelizar). Gere 3 alternativas criativas para: "${txt}"\nContexto: ${ctx}\nResposta APENAS em JSON: {"alt":["1","2","3"]}`;
  const pComo=(txt)=>`Você é CAIO v2.0 da On.Cells. Guia de execução para: "${txt}"\nResposta APENAS em JSON: {"passos":["p1","p2","p3","p4"],"ferramentas":["f1","f2"],"armadilha":"erro principal","kpi":"métrica de sucesso"}`;

  const pf=(sz,c,it=true)=>({fontFamily:"'Playfair Display',serif",fontSize:sz,color:c||B.dk,fontStyle:it?"italic":"normal"});
  const card={background:"white",border:`1.5px solid ${B.cr}`,borderRadius:14,padding:18};
  const spin={animation:"spin 1s linear infinite",display:"inline-block"};
  const mb=(bg,bc,c)=>({flexShrink:0,border:`1.5px solid ${bc}`,background:bg,borderRadius:7,padding:"3px 9px",cursor:"pointer",fontSize:9,color:c,fontWeight:700,display:"flex",alignItems:"center",gap:3});
  const tcor=t=>({cm:B.wo,sz:B.go,fh:B.tp,sp:B.lo}[t]||B.tp);

  /* ── AI PANEL ── */
  const AiPanel=({k,color})=>{
    const s=ai[k];
    if(!s?.open)return null;
    const d=s.data;
    return(
      <div style={{margin:"4px 0 0 28px",background:"#fffbf5",border:`1.5px solid ${color}44`,borderRadius:"0 0 10px 10px",padding:"12px 14px"}}>
        {s.loading&&<div style={{display:"flex",gap:8,alignItems:"center"}}><span style={spin}>⟳</span><span style={{fontSize:11,color,fontWeight:600}}>CAIO gerando...</span></div>}
        {s.error&&<p style={{fontSize:10,color:B.al,margin:0}}>{s.error}</p>}
        {d&&!s.loading&&(
          <div>
            {d.alt&&(<div>
              <div style={{fontSize:8,color,letterSpacing:2,fontWeight:700,marginBottom:8}}>🔄 ALTERNATIVAS</div>
              {d.alt.map((a,i)=>(
                <div key={i} style={{display:"flex",gap:7,marginBottom:i<d.alt.length-1?6:0,padding:"7px 10px",background:"white",borderRadius:7,border:`1px solid ${color}22`,alignItems:"flex-start"}}>
                  <div style={{width:16,height:16,borderRadius:"50%",background:color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"white",fontWeight:900,flexShrink:0}}>{i+1}</div>
                  <span style={{fontSize:11,color:B.dk,lineHeight:1.55,flex:1}}>{a}</span>
                </div>
              ))}
            </div>)}
            {d.passos&&(<div>
              <div style={{fontSize:8,color:B.go,letterSpacing:2,fontWeight:700,marginBottom:8}}>💡 COMO EXECUTAR</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                <div style={{background:"white",borderRadius:8,padding:"9px 11px",border:`1px solid ${B.he}33`,gridColumn:"1/-1"}}>
                  <div style={{fontSize:8,color:B.he,letterSpacing:1,fontWeight:700,marginBottom:6}}>▶ PASSOS</div>
                  {d.passos.map((p,i)=>(
                    <div key={i} style={{display:"flex",gap:7,marginBottom:i<d.passos.length-1?5:0}}>
                      <div style={{width:17,height:17,borderRadius:"50%",background:B.he,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"white",fontWeight:900,flexShrink:0}}>{i+1}</div>
                      <span style={{fontSize:11,color:B.dk,lineHeight:1.55}}>{p}</span>
                    </div>
                  ))}
                </div>
                {d.ferramentas&&<div style={{background:"white",borderRadius:8,padding:"9px 11px",border:`1px solid ${B.lo}33`}}>
                  <div style={{fontSize:8,color:B.lo,letterSpacing:1,fontWeight:700,marginBottom:5}}>🛠 FERRAMENTAS</div>
                  {d.ferramentas.map((f,i)=><div key={i} style={{fontSize:11,color:B.dk,lineHeight:1.5,marginBottom:3}}>→ {f}</div>)}
                </div>}
                {d.armadilha&&<div style={{background:"white",borderRadius:8,padding:"9px 11px",border:`1px solid ${B.al}33`}}>
                  <div style={{fontSize:8,color:B.al,letterSpacing:1,fontWeight:700,marginBottom:5}}>⚠️ EVITAR</div>
                  <div style={{fontSize:11,color:B.dk,lineHeight:1.5}}>✗ {d.armadilha}</div>
                </div>}
                {d.kpi&&<div style={{background:`${B.pe}08`,borderRadius:8,padding:"9px 11px",border:`1px solid ${B.pe}33`,gridColumn:"1/-1"}}>
                  <div style={{fontSize:8,color:B.pe,letterSpacing:1,fontWeight:700,marginBottom:3}}>📊 KPI</div>
                  <div style={{fontSize:11,color:B.dk,fontWeight:600}}>{d.kpi}</div>
                </div>}
              </div>
            </div>)}
          </div>
        )}
      </div>
    );
  };

  /* ── COMMENT PANEL ── */
  const CommentPanel=({k,color})=>{
    if(commentOpen!==k)return null;
    const list=comments[k]||[];
    const draft=commentDraft[k]||"";
    return(
      <div style={{margin:"0 0 0 28px",background:"#fffdf9",border:`1.5px solid ${color}33`,borderTop:"none",borderRadius:"0 0 10px 10px",padding:"12px 14px"}}>
        <div style={{fontSize:8,color:color,letterSpacing:2,fontWeight:700,marginBottom:8}}>💬 COMENTÁRIOS ({list.length})</div>
        {list.length===0&&<p style={{fontSize:10,color:B.tp,margin:"0 0 10px",fontStyle:"italic"}}>Nenhum comentário ainda — seja o primeiro.</p>}
        {list.map((c,i)=>(
          <div key={i} style={{background:"white",border:`1px solid ${B.cr}`,borderRadius:7,padding:"8px 10px",marginBottom:6,display:"flex",gap:8,alignItems:"flex-start"}}>
            <div style={{width:22,height:22,borderRadius:"50%",background:`${color}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:color,fontWeight:900,flexShrink:0}}>
              {c.author[0]}
            </div>
            <div style={{flex:1}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                <span style={{fontSize:9,fontWeight:700,color:B.dk}}>{c.author}</span>
                <span style={{fontSize:8,color:B.tp}}>{c.ts}</span>
              </div>
              <p style={{fontSize:11,color:B.dk,lineHeight:1.6,margin:0}}>{c.text}</p>
            </div>
            <button onClick={()=>delComment(k,i)} style={{width:16,height:16,borderRadius:4,border:`1px solid ${B.cr}`,background:"transparent",fontSize:8,color:B.tp,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
          </div>
        ))}
        <div style={{display:"flex",gap:6,marginTop:4}}>
          <input
            value={draft}
            onChange={e=>setCommentDraft(p=>({...p,[k]:e.target.value}))}
            onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&addComment(k,draft)}
            placeholder="Adicionar comentário... (Enter para enviar)"
            style={{flex:1,border:`1.5px solid ${color}44`,borderRadius:7,padding:"7px 10px",fontSize:11,fontFamily:"'Montserrat',sans-serif",outline:"none",color:B.dk,background:"white"}}
          />
          <button onClick={()=>addComment(k,draft)} style={{background:color,borderRadius:7,padding:"0 12px",fontSize:10,color:"white",fontWeight:700,border:"none"}}>↵</button>
        </div>
      </div>
    );
  };

  /* ── ALERT MODAL ── */
  const AlertModal=({k,text,color,label})=>{
    if(alertDraft!==k)return null;
    return(
      <div style={{position:"fixed",inset:0,background:"rgba(50,41,27,.55)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>setAlertDraft(null)}>
        <div style={{background:"white",borderRadius:16,padding:24,width:"100%",maxWidth:400,border:`3px solid ${B.al}`}} onClick={e=>e.stopPropagation()}>
          <div style={{fontSize:9,color:B.al,letterSpacing:3,fontWeight:700,marginBottom:12}}>🚨 MARCAR COMO URGENTE</div>
          <p style={{fontSize:12,color:B.dk,lineHeight:1.65,margin:"0 0 16px"}}><strong>Item:</strong> {text}</p>
          <div style={{background:`${B.al}08`,borderRadius:9,padding:"10px 12px",marginBottom:16,border:`1px solid ${B.al}33`}}>
            <div style={{fontSize:9,color:B.al,fontWeight:700,marginBottom:3}}>⚠️ AVISO</div>
            <p style={{fontSize:11,color:B.dk,margin:0,lineHeight:1.6}}>Este alerta será visível para <strong>toda a equipe</strong> na aba Visão Geral em destaque vermelho.</p>
          </div>
          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>{setAlert(k,text,color,label);setAlertDraft(null);}} style={{flex:1,background:B.al,border:"none",borderRadius:9,padding:"10px 14px",fontSize:11,fontWeight:700,color:"white"}}>🚨 Confirmar Urgência</button>
            <button onClick={()=>setAlertDraft(null)} style={{padding:"10px 14px",background:"white",border:`1.5px solid ${B.cr}`,borderRadius:9,fontSize:11,color:B.br,fontWeight:700}}>Cancelar</button>
          </div>
        </div>
      </div>
    );
  };

  /* ── TASK ITEM ── */
  const TaskItem=({k,text,color,ctx="On.Cells",tabLabel=""})=>{
    const s=ai[k];
    const hasComments=(comments[k]||[]).length>0;
    const isPinned=!!pins[k];
    const isAlert=!!alerts[k];
    return(
      <div style={{marginBottom:6}}>
        <div style={{background:isAlert?`${B.al}06`:done(k)?`${B.he}08`:color==="white"?"white":`${color}06`,border:`1.5px solid ${isAlert?B.al:done(k)?B.he:color}${isAlert?"66":done(k)?"55":"22"}`,borderRadius:10,padding:"9px 12px",opacity:done(k)?.72:1,transition:"all .2s"}}>
          {isAlert&&<div style={{fontSize:8,color:B.al,letterSpacing:2,fontWeight:700,marginBottom:5,display:"flex",gap:5,alignItems:"center"}}><span>🚨</span><span>URGENTE — visível pela equipe</span><button onClick={()=>clearAlert(k)} style={{marginLeft:"auto",background:"transparent",border:"none",fontSize:9,color:B.tp,cursor:"pointer",padding:0}}>✕ remover</button></div>}
          <div style={{display:"flex",gap:7,alignItems:"flex-start"}}>
            <button onClick={()=>tog(k)} style={{width:20,height:20,borderRadius:6,flexShrink:0,marginTop:1,border:`2px solid ${done(k)?B.he:color}`,background:done(k)?B.he:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
              {done(k)&&<span style={{color:"white",fontSize:9,fontWeight:900}}>✓</span>}
            </button>
            <p style={{fontSize:11,color:done(k)?B.tp:B.dk,lineHeight:1.6,margin:0,flex:1,textDecoration:done(k)?"line-through":"none"}}>{text}</p>
            <button onClick={()=>s?.open&&s?.data?.alt?toggleAI(k):runAI(k,pAlt(text,ctx))} style={mb(s?.open&&s?.data?.alt?`${color}15`:"white",`${color}44`,color)}>
              {s?.loading&&!s?.data?<span style={spin}>⟳</span>:(s?.open&&s?.data?.alt?"▲":"🔄")}<span>Alt.</span>
            </button>
            <button onClick={()=>s?.open&&s?.data?.passos?toggleAI(k):runAI(k,pComo(text))} style={mb(s?.open&&s?.data?.passos?"#fffbf0":"white",`${B.go}66`,"#8a6a00")}>
              {s?.loading&&!s?.data?<span style={spin}>⟳</span>:(s?.open&&s?.data?.passos?"▲":"💡")}<span>Como</span>
            </button>
            <button onClick={()=>togglePin(k,text,color,tabLabel||ctx)} title="Fixar ideia" style={mb(isPinned?`${B.go}22`:"white",`${B.go}55`,"#8a6a00")}>
              {isPinned?"📌":"📌"}<span style={{color:isPinned?"#8a6a00":B.tp}}>{isPinned?"Fixado":"Fixar"}</span>
            </button>
            <button onClick={()=>setCommentOpen(commentOpen===k?null:k)} title="Comentários" style={mb(hasComments?`${B.lo}15`:commentOpen===k?`${B.lo}08`:"white",`${B.lo}44`,B.lo)}>
              💬<span>{hasComments?(comments[k]||[]).length:"+"}</span>
            </button>
            <button onClick={()=>isAlert?clearAlert(k):setAlertDraft(k)} title="Marcar urgente" style={mb(isAlert?`${B.al}15`:"white",`${B.al}44`,B.al)}>
              🚨<span style={{color:B.al,fontWeight:700}}>{isAlert?"🔴":"!"}</span>
            </button>
          </div>
        </div>
        <AiPanel k={k} color={color}/>
        <CommentPanel k={k} color={color}/>
        <AlertModal k={k} text={text} color={color} label={tabLabel||ctx}/>
      </div>
    );
  };

  const TABS=[
    {id:"visao",l:"🏛 Visão"},
    {id:"anual",l:"📅 Cal. Anual"},
    {id:"detalhe",l:"🗓 Mês"},
    {id:"brand",l:"🎨 Brand Kit"},
    {id:"semanas",l:"📋 Semanas"},
    {id:"roteiros",l:"🎬 Roteiros"},
    {id:"influencer",l:"📦 Influencer"},
    {id:"blog",l:"✍️ Blog"},
    {id:"dash",l:"📊 Dashboard"},
  ];

  return(
    <div style={{background:B.wh,minHeight:"100vh",fontFamily:"'Montserrat',sans-serif",color:B.dk}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400;1,600&family=Montserrat:wght@300;400;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-thumb{background:${B.tp};border-radius:3px}
        button{cursor:pointer;font-family:'Montserrat',sans-serif;transition:all .15s;outline:none;border:none}
        button:hover{opacity:.84}
        .fade{animation:fi .25s ease}
        @keyframes fi{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        input:focus{border-color:${B.lo}!important;box-shadow:0 0 0 3px ${B.lo}22}
        input::placeholder{color:${B.tp};font-style:italic}
      `}</style>

      {/* HEADER */}
      <div style={{background:`linear-gradient(150deg,${B.dk},#1a1207)`,padding:"22px 24px 0",overflow:"hidden",position:"relative"}}>
        {[280,160,80].map((s,i)=><div key={i} style={{position:"absolute",width:s,height:s,top:-50,right:80+i*130,borderRadius:"50%",border:"1px solid rgba(246,231,193,0.05)",pointerEvents:"none"}}/>)}
        <div style={{position:"relative",zIndex:1}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:14,marginBottom:16}}>
            <div>
              <div style={{fontSize:8,color:B.go,letterSpacing:4,fontWeight:700,marginBottom:6}}>CAIO v2.0 · ON.CELLS · GUIA ESTRATÉGICO UNIFICADO 2026→2027</div>
              <h1 style={{...pf("clamp(20px,3vw,36px)",B.cr),lineHeight:.9,marginBottom:6}}>On.Cells <em style={{color:B.go}}>Guia Unificado</em></h1>
              <p style={{fontSize:10,color:B.tp}}>Cal. Rico + Guia Completo · ✓ Checks · 🔄 Alt. IA · 💡 Como Executar · 📌 Fixar · 💬 Comentar · 🚨 Urgente</p>
            </div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"flex-end"}}>
              {[{l:"ROAS",v:"0,64x",t:"→ 4,5x",c:B.al},{l:"Instagram",v:"1.799",t:"→ 10.000",c:B.wo},{l:"Receita/mês",v:"R$708",t:"→ R$50k",c:B.pe},{l:"Reviews",v:"0",t:"⚠️ URGENTE",c:B.al}].map((k,i)=>(
                <div key={i} style={{background:"rgba(246,231,193,.07)",border:"1px solid rgba(191,165,138,.18)",borderRadius:9,padding:"9px 12px"}}>
                  <div style={{fontSize:7,color:B.tp,letterSpacing:2,fontWeight:700}}>{k.l}</div>
                  <div style={{...pf(15,B.cr),lineHeight:1,marginTop:2}}>{k.v}</div>
                  <div style={{fontSize:8,color:k.c,fontWeight:700,marginTop:1}}>{k.t}</div>
                </div>
              ))}
              {totalCount>0&&(
                <div style={{background:"rgba(0,153,57,.15)",border:`1px solid ${B.he}44`,borderRadius:9,padding:"9px 12px"}}>
                  <div style={{fontSize:7,color:B.he,letterSpacing:2,fontWeight:700}}>PROGRESSO</div>
                  <div style={{...pf(15,B.he),lineHeight:1,marginTop:2}}>{Math.round(doneCount/totalCount*100)}%</div>
                  <div style={{height:3,background:"rgba(255,255,255,.2)",borderRadius:2,marginTop:5,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${Math.round(doneCount/totalCount*100)}%`,background:B.he,transition:"width .5s"}}/>
                  </div>
                  <div style={{fontSize:7,color:B.tp,marginTop:2}}>{doneCount}/{totalCount}</div>
                </div>
              )}
            </div>
          </div>
          <div style={{display:"flex",gap:2,overflowX:"auto",flexWrap:"nowrap"}}>
            {TABS.map(t=>(
              <button key={t.id} onClick={()=>setAba(t.id)} style={{background:aba===t.id?B.cr:"transparent",color:aba===t.id?B.dk:B.tp,border:`1px solid ${aba===t.id?B.cr:"rgba(191,165,138,.22)"}`,borderBottom:aba===t.id?"none":undefined,borderRadius:"7px 7px 0 0",padding:"8px 12px",fontSize:10,fontWeight:700,whiteSpace:"nowrap"}}>{t.l}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding:"20px 24px"}} className="fade" key={aba}>

      {/* ═══════ VISÃO GERAL ═══════ */}
      {aba==="visao"&&(
        <div>
          <div style={pf(24,B.dk)}>🏛 Visão Geral — Filosofia e Identidade</div>
          <p style={{fontSize:11,color:B.br,margin:"6px 0 16px",lineHeight:1.6}}>A razão de existir da On.Cells. O modelo que faz tudo fazer sentido.</p>

          {/* ── PROGRESS POR ABA ── */}
          <div style={{background:"white",border:`2px solid ${B.go}44`,borderRadius:14,padding:18,marginBottom:16}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
              <div style={{fontSize:9,color:B.go,letterSpacing:3,fontWeight:700}}>📊 PROGRESSO DA EQUIPE — TODAS AS ABAS</div>
              <div style={{fontSize:9,color:B.br}}>Total: <strong style={{color:B.he}}>{doneCount}</strong> / {totalCount} tarefas</div>
            </div>
            {[
              {l:"📅 Cal. Anual",prefix:"mes_done_",total:MESES.length,c:B.he},
              {l:"🗓 Mês em Detalhe",prefix:["can_","prod_","dt_"],total:null,c:B.wo},
              {l:"🎨 Brand Kit",prefix:["brand_"],total:BRAND.lacunas.length+BRAND.rec.length+BRAND.fortes.length,c:B.be},
              {l:"📋 Semanas",prefix:"sem_",total:SEMANAS.reduce((a,s)=>a+s.dias.length,0),c:B.pe},
              {l:"🎬 Roteiros",prefix:"rot_",total:ROTEIROS.reduce((a,r)=>a+r.scripts.reduce((b,s)=>b+s.cenas.length,0),0),c:B.lo},
              {l:"📦 Influencer",prefix:"kit_",total:KIT_INF.reduce((a,k)=>a+(k.items||[]).length,0),c:B.tp},
              {l:"✍️ Blog",prefix:"blog_",total:BLOG.reduce((a,b)=>a+b.arts.length,0),c:B.go},
            ].map((row,i)=>{
              const prefixes=Array.isArray(row.prefix)?row.prefix:[row.prefix];
              const done_=Object.entries(checks).filter(([k,v])=>v&&prefixes.some(p=>k.startsWith(p))).length;
              const total=row.total||Object.keys(checks).filter(k=>prefixes.some(p=>k.startsWith(p))).length||1;
              const pct=Math.round(done_/Math.max(total,1)*100);
              return(
                <div key={i} style={{marginBottom:i<6?10:0}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                    <span style={{fontSize:10,color:B.dk,fontWeight:600}}>{row.l}</span>
                    <span style={{fontSize:9,color:pct===100?B.he:row.c,fontWeight:700}}>{pct}% · {done_}/{total}</span>
                  </div>
                  <div style={{height:8,background:B.cr,borderRadius:6,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${pct}%`,background:pct===100?`linear-gradient(90deg,${B.he},#00cc55)`:row.c,borderRadius:6,transition:"width .6s ease",minWidth:pct>0?12:0}}/>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── ALERTAS URGENTES ── */}
          {Object.keys(alerts).length>0&&(
            <div style={{background:`${B.al}06`,border:`2px solid ${B.al}55`,borderRadius:14,padding:16,marginBottom:16}}>
              <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}>
                <span style={{fontSize:18}}>🚨</span>
                <div style={{fontSize:9,color:B.al,letterSpacing:3,fontWeight:700}}>ALERTAS URGENTES — VISÍVEIS PELA EQUIPE</div>
                <div style={{marginLeft:"auto",background:B.al,borderRadius:20,padding:"2px 10px",fontSize:9,color:"white",fontWeight:800}}>{Object.keys(alerts).length}</div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:7}}>
                {Object.entries(alerts).map(([k,a],i)=>(
                  <div key={i} style={{background:"white",border:`1.5px solid ${B.al}44`,borderRadius:9,padding:"10px 13px",display:"flex",gap:10,alignItems:"flex-start"}}>
                    <div style={{width:28,height:28,borderRadius:8,background:`${B.al}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>🚨</div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:3}}>
                        <span style={{fontSize:8,background:`${a.color||B.al}18`,color:a.color||B.al,borderRadius:5,padding:"1px 7px",fontWeight:700}}>{a.label}</span>
                        <span style={{fontSize:8,color:B.tp}}>{a.ts}</span>
                      </div>
                      <p style={{fontSize:11,color:B.dk,lineHeight:1.6,margin:0}}>{a.text}</p>
                    </div>
                    <button onClick={()=>clearAlert(k)} style={{border:`1px solid ${B.cr}`,background:"transparent",borderRadius:6,padding:"3px 8px",fontSize:9,color:B.tp,fontWeight:700}}>✕</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {Object.keys(alerts).length===0&&(
            <div style={{background:`${B.he}06`,border:`1.5px solid ${B.he}33`,borderRadius:12,padding:"12px 16px",marginBottom:16,display:"flex",gap:10,alignItems:"center"}}>
              <span style={{fontSize:16}}>✅</span>
              <p style={{fontSize:11,color:B.dk,margin:0,lineHeight:1.6}}>Nenhum alerta urgente no momento. Quando alguém marcar 🚨 em qualquer tarefa, aparece aqui para toda a equipe.</p>
            </div>
          )}

          {/* ── IDEIAS FIXADAS ── */}
          {Object.keys(pins).length>0&&(
            <div style={{background:`${B.go}06`,border:`2px solid ${B.go}44`,borderRadius:14,padding:16,marginBottom:16}}>
              <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:12}}>
                <span style={{fontSize:18}}>📌</span>
                <div style={{fontSize:9,color:"#8a6a00",letterSpacing:3,fontWeight:700}}>IDEIAS FIXADAS</div>
                <div style={{marginLeft:"auto",background:B.go,borderRadius:20,padding:"2px 10px",fontSize:9,color:B.dk,fontWeight:800}}>{Object.keys(pins).length}</div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:8}}>
                {Object.entries(pins).map(([k,p],i)=>(
                  <div key={i} style={{background:"white",border:`1.5px solid ${p.color||B.go}44`,borderLeft:`4px solid ${p.color||B.go}`,borderRadius:"0 9px 9px 0",padding:"10px 13px"}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:5,gap:8}}>
                      <span style={{fontSize:8,background:`${p.color||B.go}12`,color:p.color||B.go,borderRadius:5,padding:"1px 7px",fontWeight:700}}>{p.tabLabel}</span>
                      <button onClick={()=>togglePin(k)} style={{border:`1px solid ${B.cr}`,background:"transparent",borderRadius:5,padding:"2px 7px",fontSize:8,color:B.tp,fontWeight:700}}>📌 Remover</button>
                    </div>
                    <p style={{fontSize:11,color:B.dk,lineHeight:1.6,margin:"0 0 4px"}}>{p.text}</p>
                    <div style={{fontSize:8,color:B.tp}}>{p.ts}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FILOSOFIA */}
          <div style={{background:`${B.dk}08`,border:`2px solid ${B.dk}22`,borderRadius:14,padding:20,marginBottom:20}}>
            <div style={{fontSize:9,color:B.go,letterSpacing:3,fontWeight:700,marginBottom:14}}>FILOSOFIA CENTRAL — A RAZÃO DE TUDO</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12}}>
              {FILOSOFIA.map((f,i)=>(
                <div key={i} style={{...card,borderTop:`4px solid ${f.c}`,padding:16}}>
                  <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:10}}>
                    <span style={{fontSize:28}}>{f.i}</span>
                    <div>
                      <div style={{fontSize:9,color:f.c,letterSpacing:2,fontWeight:700}}>{f.n}</div>
                      <div style={{...pf(16,B.dk),lineHeight:1}}>{f.t}</div>
                    </div>
                  </div>
                  <p style={{fontSize:11,color:B.br,lineHeight:1.7,margin:"0 0 8px"}}>{f.d}</p>
                  <div style={{background:`${f.c}10`,borderRadius:7,padding:"6px 10px"}}>
                    <div style={{fontSize:8,color:f.c,fontWeight:700,marginBottom:2}}>COMO FAZER</div>
                    <div style={{fontSize:10,color:B.dk,lineHeight:1.5}}>{f.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Linhas de produto */}
          <div style={{...card,marginBottom:16}}>
            <div style={{...pf(16,B.dk),marginBottom:14}}>Linhas de Produto</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {Object.entries(PRODUTOS).map(([nome,p])=>(
                <div key={nome} style={{background:`${p.cor}0d`,border:`1.5px solid ${p.cor}44`,borderRadius:10,padding:"10px 14px",minWidth:150}}>
                  <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:6}}>
                    <span>{p.icon}</span>
                    <div style={{fontSize:10,fontWeight:700,color:p.cor}}>{nome}</div>
                  </div>
                  {p.items.map((it,i)=>(
                    <div key={i} style={{fontSize:10,color:B.dk,lineHeight:1.5,paddingLeft:4}}>→ {it}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* Metas */}
          <div style={{background:`${B.go}10`,border:`2px solid ${B.go}44`,borderRadius:13,padding:18}}>
            <div style={{fontSize:9,color:B.go,letterSpacing:2,fontWeight:700,marginBottom:12}}>🎯 METAS ANUAIS — MAR/26 → MAR/27</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:10}}>
              {[{l:"Receita Total",v:"~R$ 254k",de:"R$ 8,5k/mês",c:B.he},{l:"Instagram",v:"10.000",de:"De 1.799",c:B.wo},{l:"TikTok",v:"4.200",de:"De 30",c:B.lo},{l:"ROAS",v:"4,5x",de:"De 0,64x",c:B.pe},{l:"Conversão",v:"2,0%",de:"De 0,028%",c:B.pe},{l:"CAC",v:"<R$ 80",de:"De R$ 366",c:B.he}].map((m,i)=>(
                <div key={i} style={{background:"white",border:`1.5px solid ${m.c}44`,borderRadius:9,padding:"10px 13px"}}>
                  <div style={{fontSize:8,color:B.tp,fontWeight:600,letterSpacing:1}}>{m.l}</div>
                  <div style={{...pf(17,m.c),lineHeight:1,marginTop:3}}>{m.v}</div>
                  <div style={{fontSize:8,color:B.br,marginTop:3}}>{m.de}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════ CAL. ANUAL ═══════ */}
      {aba==="anual"&&(
        <div>
          <div style={pf(24,B.dk)}>📅 Calendário Anual 2026→2027</div>
          <p style={{fontSize:11,color:B.br,margin:"6px 0 18px",lineHeight:1.6}}>13 meses · Clique para abrir estratégia completa · ✓ Marque meses concluídos</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:12}}>
            {MESES.map((m,i)=>{
              const mk=`mes_done_${i}`;
              return(
                <div key={m.id} style={{background:"white",border:`2px solid ${done(mk)?B.he:B.cr}`,borderRadius:13,padding:16,borderTop:`4px solid ${m.c}`,opacity:done(mk)?.75:1,transition:"all .2s"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                    <div>
                      <div style={{fontSize:9,color:m.c,letterSpacing:2,fontWeight:700}}>{m.slug} · {m.per}</div>
                      <div style={{fontSize:11,fontWeight:700,color:B.dk,lineHeight:1.3,marginTop:3}}>{m.tema}</div>
                    </div>
                    <div style={{display:"flex",gap:4,alignItems:"center"}}>
                      <button onClick={()=>tog(mk)} style={{width:22,height:22,borderRadius:6,border:`2px solid ${done(mk)?B.he:m.c}`,background:done(mk)?B.he:"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {done(mk)&&<span style={{color:"white",fontSize:10,fontWeight:900}}>✓</span>}
                      </button>
                      <span style={{fontSize:22}}>{m.e}</span>
                    </div>
                  </div>
                  <div style={{...pf(10,m.c),marginBottom:8,lineHeight:1.4}}>{m.tl}</div>
                  <div style={{background:`${m.c}0d`,border:`1px solid ${m.c}33`,borderRadius:7,padding:"6px 9px",marginBottom:8}}>
                    <div style={{fontSize:8,color:m.c,fontWeight:700,marginBottom:1}}>KIT · {m.kit.preco}</div>
                    <div style={{fontSize:10,fontWeight:700,color:B.dk}}>{m.kit.n}</div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4,marginBottom:8}}>
                    {[{l:"Receita",v:m.kpis.rec},{l:"IG",v:m.kpis.ig?.toLocaleString()},{l:"ROAS",v:m.kpis.roas}].map((x,j)=>(
                      <div key={j} style={{textAlign:"center",background:B.wh,border:`1px solid ${B.cr}`,borderRadius:5,padding:"3px 2px"}}>
                        <div style={{fontSize:7,color:B.tp,fontWeight:600}}>{x.l}</div>
                        <div style={{fontSize:9,color:m.c,fontWeight:700}}>{x.v}</div>
                      </div>
                    ))}
                  </div>
                  <button onClick={()=>{setMesId(m.id);setCanal("instagram");setAba("detalhe");}} style={{width:"100%",background:`${m.c}12`,border:`1px solid ${m.c}33`,borderRadius:7,padding:"6px 10px",fontSize:9,fontWeight:700,color:m.c}}>Abrir estratégia →</button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══════ MÊS EM DETALHE ═══════ */}
      {aba==="detalhe"&&(
        <div>
          <div style={{display:"flex",gap:3,marginBottom:16,overflowX:"auto",flexWrap:"nowrap"}}>
            {MESES.map((m,i)=>(
              <button key={m.id} onClick={()=>{setMesId(m.id);setCanal("instagram");}} style={{background:mesId===m.id?m.c:"white",color:mesId===m.id?"white":B.br,border:`1.5px solid ${mesId===m.id?m.c:B.cr}`,borderRadius:7,padding:"5px 10px",fontSize:9,fontWeight:700,whiteSpace:"nowrap"}}>{m.e} {m.slug}</button>
            ))}
          </div>
          <div className="fade" key={mesId}>
            {/* Cabeçalho do mês */}
            <div style={{background:`${mesAtual.c}08`,border:`2px solid ${mesAtual.c}44`,borderRadius:14,padding:18,marginBottom:14}}>
              <div style={{display:"flex",gap:14,alignItems:"flex-start",flexWrap:"wrap"}}>
                <div style={{flex:1,minWidth:260}}>
                  <div style={{fontSize:9,color:mesAtual.c,letterSpacing:2,fontWeight:700,marginBottom:4}}>{mesAtual.slug} · {mesAtual.per} · Linha {mesAtual.linha}</div>
                  <div style={{...pf("clamp(16px,2.5vw,24px)",B.dk),lineHeight:1.2,marginBottom:8}}>{mesAtual.tema}</div>
                  <div style={{...pf(12,mesAtual.c),marginBottom:12}}>{mesAtual.tl}</div>
                  {/* VISÃO ESTRATÉGICA — exclusivo do calendar */}
                  <div style={{background:"white",border:`1px solid ${mesAtual.c}33`,borderRadius:9,padding:"10px 13px",marginBottom:10}}>
                    <div style={{fontSize:8,color:mesAtual.c,letterSpacing:2,fontWeight:700,marginBottom:5}}>🔭 VISÃO ESTRATÉGICA</div>
                    <p style={{fontSize:11,color:B.dk,lineHeight:1.75,margin:0}}>{mesAtual.visao}</p>
                  </div>
                  <div style={{background:"white",border:`1px solid ${mesAtual.c}33`,borderRadius:9,padding:"10px 13px"}}>
                    <div style={{fontSize:8,color:mesAtual.c,letterSpacing:2,fontWeight:700,marginBottom:4}}>🎯 CAMPANHA</div>
                    <div style={{fontSize:11,fontWeight:700,color:B.dk,marginBottom:4}}>{mesAtual.camp.n}</div>
                    <p style={{fontSize:11,color:B.br,lineHeight:1.7,margin:"0 0 6px"}}>{mesAtual.camp.d}</p>
                    <div style={{fontSize:10,color:mesAtual.c,fontStyle:"italic"}}>Gancho: {mesAtual.camp.g}</div>
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:4,minWidth:145}}>
                  {[{l:"Receita Meta",v:mesAtual.kpis.rec,c:B.he},{l:"Instagram",v:mesAtual.kpis.ig?.toLocaleString(),c:B.wo},{l:"TikTok",v:mesAtual.kpis.tt?.toLocaleString(),c:B.lo},{l:"Budget ADS",v:mesAtual.kpis.budget,c:B.be},{l:"ROAS Esperado",v:mesAtual.kpis.roas,c:B.pe}].map((x,i)=>(
                    <div key={i} style={{background:"white",border:`1px solid ${x.c}44`,borderRadius:6,padding:"4px 9px",display:"flex",justifyContent:"space-between",gap:10}}>
                      <span style={{fontSize:9,color:B.br,fontWeight:600}}>{x.l}</span>
                      <span style={{fontSize:9,color:x.c,fontWeight:700}}>{x.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Kit + Datas */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
              <div style={{...card,border:`2px solid ${mesAtual.c}44`}}>
                <div style={{...pf(15,B.dk),marginBottom:8}}>📦 Kit do Mês</div>
                <div style={{fontSize:12,fontWeight:700,color:mesAtual.c,fontFamily:"'Playfair Display',serif",marginBottom:4}}>{mesAtual.kit.n}</div>
                <div style={{fontSize:11,color:mesAtual.c,fontWeight:700,marginBottom:8}}>{mesAtual.kit.preco}</div>
                <div style={{fontSize:8,color:B.br,letterSpacing:1,fontWeight:600,marginBottom:5}}>PRODUTOS</div>
                {mesAtual.kit.prods.map((p,i)=>{
                  const pk=`prod_${mesId}_${i}`;
                  return(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:7,background:done(pk)?`${B.he}08`:`${B.cr}66`,borderRadius:5,padding:"4px 8px",marginBottom:3,opacity:done(pk)?.7:1}}>
                      <button onClick={()=>tog(pk)} style={{width:15,height:15,borderRadius:4,border:`2px solid ${done(pk)?B.he:mesAtual.c}`,background:done(pk)?B.he:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {done(pk)&&<span style={{color:"white",fontSize:6,fontWeight:900}}>✓</span>}
                      </button>
                      <span style={{fontSize:10,color:done(pk)?B.tp:B.dk,textDecoration:done(pk)?"line-through":"none"}}>{p}</span>
                    </div>
                  );
                })}
                {/* JUSTIFICATIVA — exclusivo do calendar */}
                <div style={{marginTop:10,background:`${mesAtual.c}08`,borderRadius:7,padding:"7px 10px"}}>
                  <div style={{fontSize:8,color:mesAtual.c,fontWeight:700,marginBottom:3}}>POR QUÊ ESTE KIT</div>
                  <p style={{fontSize:10,color:B.dk,lineHeight:1.55,margin:0}}>{mesAtual.kit.just}</p>
                </div>
                {mesAtual.kit.extra&&(
                  <div style={{marginTop:6,background:`${B.go}10`,borderRadius:7,padding:"7px 10px"}}>
                    <div style={{fontSize:8,color:"#8a6a00",fontWeight:700,marginBottom:3}}>✨ EXTRA FÍSICO</div>
                    <p style={{fontSize:10,color:B.dk,lineHeight:1.55,margin:0}}>{mesAtual.kit.extra}</p>
                  </div>
                )}
              </div>
              <div style={{...card}}>
                <div style={{...pf(15,B.dk),marginBottom:10}}>📅 Datas do Mês</div>
                {mesAtual.datas.map((d,i)=>{
                  const dc=tcor(d.t);const dk=`dt_${mesId}_${i}`;
                  return(
                    <div key={i} style={{display:"flex",gap:8,padding:"7px 0",borderBottom:i<mesAtual.datas.length-1?`1px solid ${B.cr}`:"none",opacity:done(dk)?.65:1}}>
                      <button onClick={()=>tog(dk)} style={{width:18,height:18,borderRadius:5,border:`2px solid ${done(dk)?B.he:dc}`,background:done(dk)?B.he:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}>
                        {done(dk)&&<span style={{color:"white",fontSize:8,fontWeight:900}}>✓</span>}
                      </button>
                      <div>
                        <div style={{fontSize:9,fontWeight:800,color:dc,textDecoration:done(dk)?"line-through":"none"}}>{d.d}</div>
                        <div style={{fontSize:11,color:B.dk,textDecoration:done(dk)?"line-through":"none"}}>{d.n}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Canais */}
            <div style={{...card}}>
              <div style={{...pf(15,B.dk),marginBottom:10}}>📡 Estratégia Multi-canal</div>
              <div style={{display:"flex",gap:5,marginBottom:14,flexWrap:"wrap"}}>
                {CANAIS_L.map(c=>(
                  <button key={c.id} onClick={()=>setCanal(c.id)} style={{background:canal===c.id?mesAtual.c:"white",color:canal===c.id?"white":B.br,border:`1.5px solid ${canal===c.id?mesAtual.c:B.cr}`,borderRadius:7,padding:"6px 12px",fontSize:10,fontWeight:700}}>{c.l}</button>
                ))}
              </div>
              <div className="fade" key={canal}>
                {(mesAtual.canais[canal]||[]).map((a,i)=>(
                  <TaskItem key={i} k={`can_${mesId}_${canal}_${i}`} text={a} color={mesAtual.c} ctx={`${canal} On.Cells ${mesAtual.slug}`}/>
                ))}
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:14,gap:10}}>
              {mesIdx>0&&<button onClick={()=>{setMesId(MESES[mesIdx-1].id);setCanal("instagram");}} style={{background:"white",border:`1.5px solid ${B.cr}`,borderRadius:8,padding:"8px 14px",fontSize:10,fontWeight:700,color:B.br}}>← {MESES[mesIdx-1].e} {MESES[mesIdx-1].slug}</button>}
              {mesIdx<MESES.length-1&&<button onClick={()=>{setMesId(MESES[mesIdx+1].id);setCanal("instagram");}} style={{background:mesAtual.c,borderRadius:8,padding:"8px 14px",fontSize:10,fontWeight:700,color:"white"}}>{MESES[mesIdx+1].e} {MESES[mesIdx+1].slug} →</button>}
            </div>
          </div>
        </div>
      )}

      {/* ═══════ BRAND KIT ═══════ */}
      {aba==="brand"&&(
        <div>
          <div style={pf(24,B.dk)}>🎨 Brand Kit — Diagnóstico e Prioridades</div>
          <div style={{display:"flex",gap:6,margin:"16px 0 20px",flexWrap:"wrap"}}>
            {["fortes","lacunas","rec"].map(f=>(
              <button key={f} onClick={()=>setBrandFase(f)} style={{background:brandFase===f?B.dk:"white",color:brandFase===f?"white":B.br,border:`1.5px solid ${brandFase===f?B.dk:B.cr}`,borderRadius:8,padding:"7px 14px",fontSize:10,fontWeight:700}}>
                {{fortes:"💪 Pontos Fortes",lacunas:"⚠️ Lacunas Críticas",rec:"✅ Recomendações"}[f]}
              </button>
            ))}
          </div>
          {brandFase==="fortes"&&(
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}} className="fade">
              {BRAND.fortes.map((f,i)=>(
                <div key={i} style={{...card,borderLeft:`4px solid ${B.he}`,padding:16}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,marginBottom:8}}>
                    <button onClick={()=>tog(`brand_forte_${i}`)} style={{width:20,height:20,borderRadius:6,border:`2px solid ${done(`brand_forte_${i}`)?B.he:B.he}`,background:done(`brand_forte_${i}`)?B.he:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                      {done(`brand_forte_${i}`)&&<span style={{color:"white",fontSize:9,fontWeight:900}}>✓</span>}
                    </button>
                    <div style={{fontSize:8,background:`${B.he}18`,color:B.he,borderRadius:6,padding:"2px 8px",fontWeight:700}}>{f.n}</div>
                  </div>
                  <div style={{fontSize:13,fontWeight:700,color:B.dk,marginBottom:7}}>{f.t}</div>
                  <p style={{fontSize:11,color:B.br,lineHeight:1.7,margin:0}}>{f.d}</p>
                </div>
              ))}
            </div>
          )}
          {brandFase==="lacunas"&&(
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:12}} className="fade">
              {BRAND.lacunas.map((l,i)=>(
                <div key={i} style={{...card,borderLeft:`4px solid ${B.al}`,padding:16}}>
                  <div style={{fontSize:8,background:`${B.al}18`,color:B.al,borderRadius:6,padding:"2px 8px",fontWeight:700,marginBottom:8,display:"inline-block"}}>{l.u}</div>
                  <div style={{fontSize:12,fontWeight:700,color:B.dk,marginBottom:6}}>{l.t}</div>
                  <TaskItem k={`brand_lac_${i}`} text={l.a} color={B.al} ctx="brand kit On.Cells"/>
                </div>
              ))}
            </div>
          )}
          {brandFase==="rec"&&(
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}} className="fade">
              {BRAND.rec.map((r,i)=>(
                <div key={i} style={{...card,borderTop:`4px solid ${r.c}`,padding:16}}>
                  <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:8}}>
                    <div style={{width:32,height:32,borderRadius:10,background:r.c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:"white",fontWeight:900,flexShrink:0}}>{r.n}</div>
                    <div>
                      <div style={{fontSize:12,fontWeight:700,color:B.dk}}>{r.t}</div>
                      <div style={{fontSize:9,color:r.c,fontWeight:700}}>{r.p}</div>
                    </div>
                  </div>
                  <TaskItem k={`brand_rec_${i}`} text={r.d} color={r.c} ctx="brand kit On.Cells"/>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ═══════ SEMANAS ═══════ */}
      {aba==="semanas"&&(
        <div>
          <div style={pf(24,B.dk)}>📋 Plano Semanal de Conteúdo</div>
          <div style={{display:"flex",gap:6,margin:"16px 0 20px",flexWrap:"wrap"}}>
            {SEMANAS.map((s,i)=>(
              <button key={i} onClick={()=>setSem(i)} style={{background:sem===i?s.c:"white",color:sem===i?"white":B.br,border:`1.5px solid ${sem===i?s.c:B.cr}`,borderRadius:8,padding:"7px 14px",fontSize:10,fontWeight:700}}>
                {s.e} Sem. {s.n}
              </button>
            ))}
          </div>
          {semAtual&&(
            <div className="fade" key={sem}>
              <div style={{...card,marginBottom:14,borderTop:`4px solid ${semAtual.c}`}}>
                <div style={{display:"flex",gap:14,alignItems:"flex-start",flexWrap:"wrap",marginBottom:16}}>
                  <span style={{fontSize:34}}>{semAtual.e}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:9,color:semAtual.c,letterSpacing:2,fontWeight:700}}>SEMANA {semAtual.n}</div>
                    <div style={{...pf(20,B.dk),marginBottom:6}}>{semAtual.tema}</div>
                    <div style={{fontSize:11,color:B.br,marginBottom:8}}>Dor central: <strong>{semAtual.dor}</strong></div>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                      {semAtual.prods.map((p,i)=><span key={i} style={{background:`${semAtual.c}10`,border:`1px solid ${semAtual.c}44`,borderRadius:6,padding:"3px 9px",fontSize:9,color:semAtual.c,fontWeight:700}}>{p}</span>)}
                    </div>
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  {semAtual.dias.map((dia,i)=>{
                    const dk=`sem_${sem}_d${i}`;
                    return(
                      <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",background:done(dk)?`${B.he}05`:`${semAtual.c}05`,border:`1.5px solid ${done(dk)?B.he:semAtual.c}22`,borderRadius:9,padding:"10px 12px",opacity:done(dk)?.72:1}}>
                        <button onClick={()=>tog(dk)} style={{width:20,height:20,borderRadius:6,border:`2px solid ${done(dk)?B.he:semAtual.c}`,background:done(dk)?B.he:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",marginTop:1}}>
                          {done(dk)&&<span style={{color:"white",fontSize:9,fontWeight:900}}>✓</span>}
                        </button>
                        <div style={{flex:1}}>
                          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:3,flexWrap:"wrap"}}>
                            <span style={{fontSize:9,fontWeight:800,color:semAtual.c,minWidth:28}}>{dia.d}</span>
                            <span style={{fontSize:8,background:`${semAtual.c}15`,color:semAtual.c,borderRadius:5,padding:"1px 7px",fontWeight:700}}>{dia.t}</span>
                            <span style={{fontSize:8,color:B.br}}>Por: {dia.r}</span>
                          </div>
                          <div style={{fontSize:11,color:done(dk)?B.tp:B.dk,lineHeight:1.55,textDecoration:done(dk)?"line-through":"none"}}>{dia.ti}</div>
                          <div style={{fontSize:9,color:semAtual.c,marginTop:3,fontStyle:"italic"}}>Goal: {dia.g}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══════ ROTEIROS ═══════ */}
      {aba==="roteiros"&&(
        <div>
          <div style={pf(24,B.dk)}>🎬 Roteiros por Persona</div>
          <div style={{display:"flex",gap:6,margin:"16px 0 20px",flexWrap:"wrap"}}>
            {ROTEIROS.map(r=>(
              <button key={r.id} onClick={()=>{setRotId(r.id);setScriptI(0);}} style={{background:rotId===r.id?r.c:"white",color:rotId===r.id?"white":B.br,border:`1.5px solid ${rotId===r.id?r.c:B.cr}`,borderRadius:8,padding:"7px 14px",fontSize:10,fontWeight:700}}>
                {r.e} {r.nome}
              </button>
            ))}
          </div>
          {rotAtual&&(
            <div className="fade" key={rotId}>
              <div style={{...card,borderTop:`4px solid ${rotAtual.c}`,marginBottom:14}}>
                <div style={{display:"flex",gap:12,alignItems:"flex-start",flexWrap:"wrap",marginBottom:12}}>
                  <span style={{fontSize:32}}>{rotAtual.e}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:9,color:rotAtual.c,letterSpacing:2,fontWeight:700}}>PERSONA · {rotAtual.arq.toUpperCase()}</div>
                    <div style={{...pf(18,B.dk),marginBottom:4}}>{rotAtual.nome}</div>
                    <p style={{fontSize:11,color:B.br,margin:0,fontStyle:"italic"}}>{rotAtual.sub}</p>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
                  {[{l:"🎬 Cenário",v:rotAtual.cenario},{l:"👗 Vestuário",v:rotAtual.vest},{l:"🚫 Regra de Ouro",v:rotAtual.regra}].map((x,i)=>(
                    <div key={i} style={{background:`${rotAtual.c}08`,borderRadius:8,padding:"9px 12px",border:`1px solid ${rotAtual.c}22`,gridColumn:i===2?"1/-1":"auto"}}>
                      <div style={{fontSize:8,color:rotAtual.c,fontWeight:700,marginBottom:4}}>{x.l}</div>
                      <p style={{fontSize:11,color:B.dk,lineHeight:1.55,margin:0}}>{x.v}</p>
                    </div>
                  ))}
                </div>
                <div style={{display:"flex",gap:5,marginBottom:12,flexWrap:"wrap"}}>
                  {rotAtual.scripts.map((s,i)=>(
                    <button key={i} onClick={()=>setScriptI(i)} style={{background:scriptI===i?rotAtual.c:"white",color:scriptI===i?"white":B.br,border:`1.5px solid ${scriptI===i?rotAtual.c:B.cr}`,borderRadius:7,padding:"5px 12px",fontSize:10,fontWeight:700}}>{s.p}</button>
                  ))}
                </div>
                {scriptAtual&&(
                  <div className="fade" key={scriptI}>
                    <div style={{fontSize:11,fontWeight:700,color:B.dk,marginBottom:4}}>{scriptAtual.ti}</div>
                    <div style={{display:"flex",gap:6,marginBottom:12}}>
                      <span style={{fontSize:8,background:`${scriptAtual.c}15`,color:scriptAtual.c,borderRadius:5,padding:"2px 8px",fontWeight:700}}>{scriptAtual.l}</span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:7}}>
                      {scriptAtual.cenas.map((cena,i)=>{
                        const ck=`rot_${rotId}_${scriptI}_c${i}`;
                        return(
                          <div key={i} style={{background:done(ck)?`${scriptAtual.c}05`:`${B.wh}`,border:`1.5px solid ${done(ck)?B.he:scriptAtual.c}22`,borderRadius:9,padding:"10px 13px",opacity:done(ck)?.72:1}}>
                            <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                              <button onClick={()=>tog(ck)} style={{width:18,height:18,borderRadius:5,border:`2px solid ${done(ck)?B.he:scriptAtual.c}`,background:done(ck)?B.he:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}>
                                {done(ck)&&<span style={{color:"white",fontSize:8,fontWeight:900}}>✓</span>}
                              </button>
                              <div style={{flex:1}}>
                                <div style={{fontSize:8,color:scriptAtual.c,letterSpacing:1,fontWeight:700,marginBottom:3}}>{cena.tag}</div>
                                <p style={{fontSize:11,color:done(ck)?B.tp:B.dk,lineHeight:1.65,margin:"0 0 4px",fontStyle:"italic"}}>{cena.txt}</p>
                                <div style={{fontSize:9,color:B.br}}>→ Direção: {cena.dir}</div>
                              </div>
                              <button onClick={()=>copiar(cena.txt,`rot_cp_${i}`)} style={{width:22,height:22,border:`1px solid ${B.cr}`,background:"white",borderRadius:5,cursor:"pointer",fontSize:9,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                                {copiado===`rot_cp_${i}`?"✓":"📋"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══════ INFLUENCER ═══════ */}
      {aba==="influencer"&&(
        <div>
          <div style={pf(24,B.dk)}>📦 Protocolo Influencer</div>
          <div style={{display:"flex",gap:6,margin:"16px 0 20px",flexWrap:"wrap"}}>
            {KIT_INF.map((k,i)=>(
              <button key={i} onClick={()=>setKitI(i)} style={{background:kitI===i?k.c:"white",color:kitI===i?"white":B.br,border:`1.5px solid ${kitI===i?k.c:B.cr}`,borderRadius:8,padding:"7px 12px",fontSize:10,fontWeight:700}}>
                {k.e} {k.n}. {k.t}
              </button>
            ))}
          </div>
          {kitAtual&&(
            <div className="fade" key={kitI}>
              <div style={{...card,borderTop:`4px solid ${kitAtual.c}`,marginBottom:14}}>
                <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:10}}>
                  <span style={{fontSize:32}}>{kitAtual.e}</span>
                  <div>
                    <div style={{fontSize:9,color:kitAtual.c,letterSpacing:2,fontWeight:700}}>ETAPA {kitAtual.n}</div>
                    <div style={{...pf(18,B.dk)}}>{kitAtual.t}</div>
                  </div>
                </div>
                <p style={{fontSize:12,color:B.br,lineHeight:1.7,margin:"0 0 14px"}}>{kitAtual.desc}</p>
                {kitAtual.items&&(
                  <div style={{marginBottom:12}}>
                    <div style={{fontSize:9,color:kitAtual.c,letterSpacing:1,fontWeight:700,marginBottom:8}}>CHECKLIST</div>
                    {kitAtual.items.map((it,i)=>(
                      <TaskItem key={i} k={`kit_${kitI}_${i}`} text={it} color={kitAtual.c} ctx="protocolo influencer On.Cells"/>
                    ))}
                  </div>
                )}
                {kitAtual.tmpl&&(
                  <div style={{background:`${kitAtual.c}08`,border:`1.5px solid ${kitAtual.c}33`,borderRadius:10,padding:"14px 16px",marginBottom:12}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                      <div style={{fontSize:9,color:kitAtual.c,letterSpacing:1,fontWeight:700}}>✉️ TEMPLATE</div>
                      <button onClick={()=>copiar(kitAtual.tmpl,"kit_tmpl")} style={{background:"transparent",border:`1px solid ${kitAtual.c}44`,borderRadius:6,padding:"3px 9px",cursor:"pointer",fontSize:9,color:kitAtual.c,fontWeight:700}}>
                        {copiado==="kit_tmpl"?"✓ Copiado":"📋 Copiar"}
                      </button>
                    </div>
                    <pre style={{fontSize:11,color:B.dk,lineHeight:1.7,margin:0,whiteSpace:"pre-wrap",fontFamily:"'Montserrat',sans-serif"}}>{kitAtual.tmpl}</pre>
                  </div>
                )}
                <div style={{background:`${B.go}10`,border:`1.5px solid ${B.go}55`,borderRadius:9,padding:"10px 13px",display:"flex",gap:8}}>
                  <span style={{fontSize:16}}>💡</span>
                  <p style={{fontSize:11,color:B.dk,lineHeight:1.65,margin:0}}>{kitAtual.dica}</p>
                </div>
              </div>
              <div style={{display:"flex",gap:6}}>
                {kitI>0&&<button onClick={()=>setKitI(kitI-1)} style={{background:"white",border:`1.5px solid ${B.cr}`,borderRadius:8,padding:"8px 14px",fontSize:10,fontWeight:700,color:B.br}}>← {KIT_INF[kitI-1].n}. {KIT_INF[kitI-1].t}</button>}
                {kitI<KIT_INF.length-1&&<button onClick={()=>setKitI(kitI+1)} style={{background:kitAtual.c,borderRadius:8,padding:"8px 14px",fontSize:10,fontWeight:700,color:"white"}}>{KIT_INF[kitI+1].n}. {KIT_INF[kitI+1].t} →</button>}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══════ BLOG ═══════ */}
      {aba==="blog"&&(
        <div>
          <div style={pf(24,B.dk)}>✍️ Blog & SEO — Plano Editorial</div>
          <div style={{display:"flex",gap:6,margin:"16px 0 20px",flexWrap:"wrap"}}>
            {BLOG.map((b,i)=>(
              <button key={i} onClick={()=>setBlogI(i)} style={{background:blogI===i?b.c:"white",color:blogI===i?"white":B.br,border:`1.5px solid ${blogI===i?b.c:B.cr}`,borderRadius:8,padding:"7px 14px",fontSize:10,fontWeight:700}}>
                {b.m}
              </button>
            ))}
          </div>
          {blogAtual&&(
            <div className="fade" key={blogI}>
              <div style={{...card,borderTop:`4px solid ${blogAtual.c}`,marginBottom:14}}>
                <div style={{...pf(16,B.dk),marginBottom:4}}>{blogAtual.m}</div>
                <div style={{fontSize:9,color:blogAtual.c,letterSpacing:2,fontWeight:700,marginBottom:14}}>{blogAtual.f.toUpperCase()}</div>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {blogAtual.arts.map((a,i)=>{
                    const bk=`blog_${blogI}_a${i}`;
                    return(
                      <div key={i} style={{background:done(bk)?`${blogAtual.c}05`:"white",border:`1.5px solid ${done(bk)?B.he:blogAtual.c}22`,borderRadius:10,padding:"12px 14px",opacity:done(bk)?.72:1}}>
                        <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                          <button onClick={()=>tog(bk)} style={{width:20,height:20,borderRadius:6,border:`2px solid ${done(bk)?B.he:blogAtual.c}`,background:done(bk)?B.he:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}>
                            {done(bk)&&<span style={{color:"white",fontSize:9,fontWeight:900}}>✓</span>}
                          </button>
                          <div style={{flex:1}}>
                            <div style={{fontSize:11,fontWeight:700,color:done(bk)?B.tp:B.dk,lineHeight:1.4,marginBottom:6,textDecoration:done(bk)?"line-through":"none"}}>{a.t}</div>
                            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                              {[{l:"KW",v:a.kw,c:blogAtual.c},{l:"Volume",v:a.vol,c:a.vol==="Muito Alto"?B.he:a.vol==="Alto"?B.pe:B.tp},{l:"Dificuldade",v:a.dif,c:a.dif==="Baixa"?B.he:a.dif==="Alta"?B.al:B.pe},{l:"Produto",v:a.p,c:B.lo}].map((x,j)=>(
                                <span key={j} style={{fontSize:8,background:`${x.c}12`,color:x.c,borderRadius:5,padding:"2px 7px",fontWeight:700}}>{x.l}: {x.v}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══════ DASHBOARD ═══════ */}
      {aba==="dash"&&(
        <div>
          <div style={pf(24,B.dk)}>📊 Dashboard — Baseline e Projeção</div>
          <div style={{background:`${B.al}08`,border:`2px solid ${B.al}44`,borderRadius:13,padding:16,marginBottom:18,marginTop:12}}>
            <div style={{fontSize:9,color:B.al,letterSpacing:2,fontWeight:700,marginBottom:10}}>🚨 DIAGNÓSTICO REAL — FEV/2026</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {[{l:"ROAS",v:"0,64x",bm:"Meta 4,5x",c:B.al},{l:"Conversão",v:"0,028%",bm:"Meta 2,0%",c:B.al},{l:"CAC",v:"R$366",bm:"Meta <R$80",c:B.al},{l:"Receita/mês",v:"R$708",bm:"Meta R$50k",c:B.pe},{l:"Instagram",v:"1.799",bm:"Meta 10.000",c:B.pe},{l:"TikTok",v:"30",bm:"Meta 4.200",c:B.al},{l:"Reviews",v:"0",bm:"⚠️ Min. 3+ p/ ADS",c:B.al}].map((m,i)=>(
                <div key={i} style={{background:"white",border:`1.5px solid ${m.c}33`,borderRadius:9,padding:"9px 12px",minWidth:95}}>
                  <div style={{fontSize:8,color:B.br,letterSpacing:1,fontWeight:600}}>{m.l}</div>
                  <div style={{...pf(15,m.c),lineHeight:1,marginTop:2}}>{m.v}</div>
                  <div style={{fontSize:8,color:B.tp,marginTop:2}}>{m.bm}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{...card,marginBottom:16}}>
            <div style={{...pf(16,B.dk),marginBottom:14}}>Projeção de Receita — 13 Meses</div>
            <div style={{display:"flex",flexDirection:"column",gap:5}}>
              {PROJ.map((p,i)=>{
                const pct=Math.max(4,Math.round(p.rec/50000*100));
                return(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:54,fontSize:9,color:B.br,fontWeight:700,textAlign:"right",flexShrink:0}}>{MESES[i].e} {p.m}</div>
                    <div style={{flex:1,background:B.cr,borderRadius:5,height:24,overflow:"hidden"}}>
                      <div style={{height:"100%",width:`${pct}%`,background:p.rec>=30000?`linear-gradient(90deg,${B.dk},${B.he})`:B.he,borderRadius:5,display:"flex",alignItems:"center",paddingLeft:8,minWidth:55,transition:"width .5s"}}>
                        <span style={{fontSize:9,color:"white",fontWeight:800}}>R${Math.round(p.rec/1000)}k</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{background:`${B.go}10`,border:`2px solid ${B.go}44`,borderRadius:12,padding:16,display:"flex",gap:12}}>
            <span style={{fontSize:22}}>💡</span>
            <div>
              <div style={{fontSize:9,color:B.go,letterSpacing:2,fontWeight:700,marginBottom:5}}>INSIGHT CAIO — PRIORIDADE MARÇO</div>
              <p style={{fontSize:12,color:B.dk,lineHeight:1.8,margin:0}}>Com ROAS 0,64x, escalar ADS agora é queimar dinheiro. <strong>Prioridade máxima: coletar 3+ reviews por produto.</strong> Com prova social, ROAS tende a dobrar imediatamente. Caminho: educar → coletar prova → escalar.</p>
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  );
}
