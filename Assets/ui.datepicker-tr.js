jQuery(function($) {
    $.datepicker.regional['tr'] = { clearText: '', clearStatus: '',
        closeText: 'Kapat', closeStatus: 'Kapat',
        prevText: '< Geri', prevStatus: 'Önceki ay.',
        nextText: 'İleri >', nextStatus: 'Sonraki ay.',
        currentText: 'Bugün', currentStatus: 'Bugün',
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
		'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz',
		'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        monthStatus: 'Farklı ay', yearStatus: 'Farklı yıl',
        weekHeader: 'Hf', weekStatus: '',
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Paz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
        dayNamesMin: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
        dayStatus: 'DD, MM d', dateStatus: 'DD, MM d',
        dateFormat: 'dd/mm/yy', firstDay: 1,
        initStatus: 'Tarih seçiniz...', isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['tr']);
});