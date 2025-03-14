//DataTable plugin: https://datatables.net/
//language used is jQuery
                    var table = new DataTable("#myTable", {
                        stateSave: true,
                        hover: true,
                        fixedColumns: {
                            start: 3,
                        },
                        responsive: true,
                        layout: {
                            topStart: {
                                buttons: [
                                    {
                                        extend: 'colvisGroup',
                                        text: 'Bare Info',
                                        show: [0, 1, 2, 3, 4, 6, 14],
                                        hide: [5, 7, 8, 9, 10, 11, 12, 13]
                                    },
                                    {
                                        extend: 'colvisGroup',
                                        text: 'Bare Info & Thumbnails',
                                        show: [0, 1, 2, 3, 4, 5, 6, 14],
                                        hide: [7, 8, 9, 10, 11, 12, 13]
                                    },
                                    {
                                        extend: 'colvisGroup',
                                        text: 'Hide Images',
                                        show: [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                                        hide: [5]
                                    },
                                    {
                                        extend: 'colvisGroup',
                                        text: 'No Tags',
                                        show: [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14],
                                        hide: [4, 6 ,14]
                                    },
                                    {
                                        extend: 'colvisGroup',
                                        text: 'Sale Periods',
                                        show: [0, 1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14],
                                        hide: [9, 10, 11]
                                    },
                                    {
                                        extend: 'colvisGroup',
                                        text: 'Show all',
                                        show: ':hidden'
                                    }
                                ]
                            }
                        },
                        scrollCollapse: true,
                        scrollX: true,
                        fixedHeader: true,
                        columnDefs: [
                            { className: "dateCol1", targets: [9] },
							{ className: "dateCol2", targets: [11] }
                        ],
                        columns: [
                            {
                                title: 'ID Number', data: "id", render: function (data) {
                                    return "<a href='https://assets.clip-studio.com/en-us/search?word=" + data + "&order=new' target = '_blank'>" + data + "</a>"
                                }
                            },
                            {
                                title: 'Asset Name', data: "name", render: function (data) {
                                    return "<span class = 'asset-span'>" + data + "</span>";
                                }
                            },
                            {
                                title: 'Notes?', data: "starred", render: function (data) {
                                    if (data === true) { return "<span class = 'pop-2'> &#8264; </span>" }
                                    else { return "<span class='pop-2'> </span>" };
                                }
                            },
                            {
                                title: 'Author', data: "author", render: function (data) {
                                    return "<span class = 'author-span'>" + data + "</span>";
                                },
                            },

                            {
                                title: 'Tags', data: "tags", render: function (data) {
                                    var taggedCol1Text = data;

                                    var split1 = taggedCol1Text.split('[');
                                    var split2 = split1.filter(function (e) {
                                        return e; // Returns only the truthy values
                                    });

                                    var split3 = split2.map(x => x.replace(']', ''));

                                    var listHTML = "<ul>";
                                    for (let i = 0; i < split3.length; i++) {
                                        listHTML += "<li>" + split3[i] + "</li>";
                                    }
                                    listHTML += "</ul>";

                                    return "<div class = 'tag-box'>" + listHTML + "</div>";
                                }
                            },
                            {
                                title: 'Image URL', data: "imgURL", render: function (data, JsonResultRow) {
                                    return "<a data-lightbox='gallery' href = '" + data + "'><img class='thumbnail' src='" + data + "'></a>";
                                }
                            },
                            {
                                title: 'Brush Category', data: "brushCategory", render: function (data) {
                                    var taggedCol1Text = data;

                                    var split1 = taggedCol1Text.split('[');
                                    var split2 = split1.filter(function (e) {
                                        return e; // Returns only the truthy values
                                    });

                                    var split3 = split2.map(x => x.replace(']', ''));

                                    var listHTML = "<ul>";
                                    for (let i = 0; i < split3.length; i++) {
                                        listHTML += "<li>" + split3[i] + "</li>";
                                    }
                                    listHTML += "</ul>";

                                    return "<div class = 'tag-box'>" + listHTML + "</div>";
                                }
                            },
                            {
                                title: 'Available for Free?', data: "availableFree", render: function (data) {
                                    if (data === true) { return "<span class = 'pop'> &#9989; </span>" }
                                    else { return "<span class = 'pop'> &#10060 </span>" };
                                }
                            },
                            {
                                title: 'Limited Time Free?', data: "limitedFree", render: function (data) {
                                    if (data === true) { return "<span class = 'pop'> &#9989; </span>" }
                                    else { return "<span class = 'p'> &#10060 </span>" };
                                },
                            },
                            {
                                title: 'Date Uploaded', data: "dateUploaded", render: DataTable.render.datetime('DD/MM/YYYY')
                            },
                            {
                                title: 'Days Free', data: "daysFree", render: function (data) {
                                    if (data !== "") { return data }
                                    else { return "<span class='no-data'>No days recorded.</span>" };
                                },
                            },
                            {
                                title: 'Date Sale Ends', data: "dateEnd", render: DataTable.render.datetime('DD/MM/YYYY')
                            },
                            {
                                //Couldn't figure out how to make the render function work for regular numbers, but! I got the actual value of the data to "represent" the locale string without just reading that as....well, a string.
                                title: 'Gold Cost', data: "gold", render: function (data) {
                                    var value;
                                    if (data !== "") { value = Number(data) || 0; return value.toLocaleString('en-US') }
                                    else { return 0 };
                                },
                            },
                            {
                                //Couldn't figure out how to make the render function work for regular numbers, but! I got the actual value of the data to "represent" the locale string without just reading that as....well, a string.
                                title: 'Clippy Cost', data: "clippy", render: function (data) {
                                    var value;
                                    if (data !== "") { value = Number(data) || 0; return value.toLocaleString('en-US') }
                                    else { return 0 };
                                },
                            },
                            {
                                title: 'Other Categories', data: "otherCategories", render: function (data) {
                                    var taggedCol1Text = data;

                                    var split1 = taggedCol1Text.split('[');
                                    var split2 = split1.filter(function (e) {
                                        return e; // Returns only the truthy values
                                    });

                                    var split3 = split2.map(x => x.replace(']', ''));

                                    var listHTML = "<ul>";
                                    for (let i = 0; i < split3.length; i++) {
                                        listHTML += "<li>" + split3[i] + "</li>";
                                    }
                                    listHTML += "</ul>";

                                    return "<div class = 'tag-box'>" + listHTML + "</div>";
                                }
                            },

                        ],
                        data: output4B,
                        rowCallback: function (row, data) {

							if (data.dateUploaded == "") { $("td.dateCol1", row).html("<div class='no-data'>No date recorded.</div>") };
                            if (data.dateUploaded != "" && data.dateEnd > todayISO) { $("td:eq(1)", row).find(".asset-span").addClass("dateSaleActive"); $("td:eq(2)", row).find(".author-span").addClass("dateSaleActive") } else { $("td:eq(1)", row).find(".asset-span").removeClass("dateSaleActive"); $("td:eq(2)", row).find(".author-span").removeClass("dateSaleActive") };
							if (data.dateEnd == "") { $("td.dateCol2", row).html("<div class='no-data'>No date recorded.</div>") };

                            //console.log(split1)
                            //console.log(split2)

                        },


                    });
                })
