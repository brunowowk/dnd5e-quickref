function add_quickref_item(parent, data, type) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";

    var item = document.createElement("div");
    item.className += "item itemsize"
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    }

    parent.appendChild(item);
}

function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black"

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
    $("#modal-reference").text(reference);

    var bullets_html = bullets.map(function (item) { return "<p class=\"fontsize\">" + item + "</p>"; }).join("\n<hr style=\"height: 1px\">\n");
    $("#modal-bullets").html(bullets_html);
}

function hide_modal() {
    $("body").removeClass("modal-open");
    $("#modal").removeClass("modal-visible");
}

function fill_section(data, parentname, type) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function init() {
    fill_section(data_movement, "basic-movement", "Movement");
    fill_section(data_action, "basic-actions", "Action");
    fill_section(data_freeaction, "basic-free-actions", "Free Action");
    fill_section(data_bonusaction, "basic-bonus-actions", "Bonus Action");
    fill_section(data_reaction, "basic-reactions", "Reaction");
    fill_section(data_condition, "basic-conditions", "Condition");
    fill_section(data_visibility_obscurance, "visibility-obscurance", "Visibility & Cover");
    fill_section(data_visibility_light, "visibility-light", "Visibility & Cover");
    fill_section(data_visibility_vision, "visibility-vision", "Visibility & Cover");
    fill_section(data_visibility_cover, "visibility-cover", "Visibility & Cover");
    fill_section(data_xp, "xp", "Experience");
    fill_section(data_attacks, "attacks", "Attacks & Damage");
    fill_section(data_attacks_special, "attacks_special", "Attacks & Damage");
    fill_section(data_damage_typescommon, "damage-typescommon", "Attacks & Damage");
    fill_section(data_damage_types, "damage-types", "Attacks & Damage");
    fill_section(data_death, "death", "Death & Recovery");
    fill_section(data_recovery_health, "recovery-health", "Death & Recovery");
    fill_section(data_recovery_resting, "recovery-resting", "Death & Recovery");
    fill_section(data_abilities_str, "abilities-str", "Ability Scores & Skills");
    fill_section(data_abilities_dex, "abilities-dex", "Ability Scores & Skills");
    fill_section(data_abilities_con, "abilities-con", "Ability Scores & Skills");
    fill_section(data_abilities_int, "abilities-int", "Ability Scores & Skills");
    fill_section(data_abilities_wis, "abilities-wis", "Ability Scores & Skills");
    fill_section(data_abilities_cha, "abilities-cha", "Ability Scores & Skills");
    fill_section(data_travel, "travel", "Traveling");
    fill_section(data_languages_standard, "languages-standard", "Languages");
    fill_section(data_languages_exotic, "languages-exotic", "Languages");
    fill_section(data_languages_rare, "languages-rare", "Languages");
    fill_section(data_equipment_packs, "equipment-packs", "Equipment Packs");
    fill_section(data_equipment_tools, "equipment-tools", "Tools");
    fill_section(data_equipment_weapons_properties, "equipment-weap-prop", "Weapon Properties");
    fill_section(data_spellcasting_general, "spellcasting-general", "Spellcasting");
    fill_section(data_spellcasting_spellinfo, "spellcasting-spellinfo", "Spellcasting");
    fill_section(data_classfeatures_barbarian, "class-features-barbarian", "Class Features");
    fill_section(data_classfeatures_bard, "class-features-bard", "Class Features");
    fill_section(data_classfeatures_cleric, "class-features-cleric", "Class Features");
    fill_section(data_classfeatures_druid, "class-features-druid", "Class Features");
    fill_section(data_classfeatures_fighter, "class-features-fighter", "Class Features");
    fill_section(data_classfeatures_monk, "class-features-monk", "Class Features");
    fill_section(data_classfeatures_paladin, "class-features-paladin", "Class Features");
    fill_section(data_classfeatures_ranger, "class-features-ranger", "Class Features");
    fill_section(data_classfeatures_rogue, "class-features-rogue", "Class Features");
    fill_section(data_classfeatures_sorcerer, "class-features-sorcerer", "Class Features");
    fill_section(data_classfeatures_warlock, "class-features-warlock", "Class Features");
    //fill_section(data_classfeatures_wizard, "class-features-wizard", "Class Features");
    fill_section(data_multiclassing_classreqs, "multiclassing-classreqs", "Prerequisites, Proficiencies, and More");
    fill_section(data_multiclassing_classfeats_reg, "multiclassing-classfeats-reg", "Class Features & Multiclassing");
    fill_section(data_multiclassing_classfeats_casting, "multiclassing-classfeats-casting", "Class Features & Multiclassing");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(init);
