// ============================================================
// FEKA KAWIÇO — Configuração central do Supabase
// Este ficheiro é carregado por todas as páginas que precisam
// de autenticação ou de dados da base de dados.
// A chave 'anon public' é segura para expor no browser — é a
// chave própria para isso. Nunca coloques aqui a 'service_role'.
// ============================================================

const SUPABASE_URL = 'https://xewvmdhdahpawllxecfe.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_rWC_Uh5e6mT0aMAn3hSTrQ_7oACjDul';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
