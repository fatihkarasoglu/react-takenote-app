const storage = {
    get: (key) => {
        try{
            const value = localStorage.getItem(key)
            return value ? JSON.parse(value) : null;

        } catch (err) {
            console.error('Yerel depolama erişim hatası!', err);
        }
    },
    set: (key, data) => {
        if(!data) {
            alert('Veri boş olamaz!');
        }

        try{
            localStorage.setItem(key, JSON.stringify([data]));

        } catch(err) {
            console.error('Veri kaydedilirken hata oluştu!', err);
        }
    },
    removeData: (key) => {
        try{
            localStorage.removeItem(key);

        } catch(err) {
            console.error('Veri silinirken hata oluştu!', err);
        }
    }
}

export default storage;