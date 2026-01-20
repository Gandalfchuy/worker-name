const supabaseUrl = "https://sgaknafzlwzylbkrzicz.supabase.co";
const supabaseAnonKey = "sb_publishable_I176GI81eGbFIXKEerPTxQ_sH-eJMBI";

// Verificamos si el script del CDN cargó correctamente
if (typeof window.supabase === 'undefined') {
  console.error('La librería de Supabase no se ha cargado. Verifica tu index.html');
}

// Accedemos a la variable global 'window.supabase' creada por el script del CDN
// y exportamos la instancia para usarla en el resto de la app.
export const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);